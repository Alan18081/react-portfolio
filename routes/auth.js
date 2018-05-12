const User = require('../models/User');
const passport = require('passport');
const {validateLogin,validateSetPassword} = require('../middlewares/validate');
const crypto = require('crypto');
const {sendResetPasswordEmail} = require('../services/sendgrid/mailer');

module.exports = app => {

  app.get('/api/admin', (req,res) => {
    res.send(req.user || false);
  });

  app.post('/api/login',validateLogin,(req,res,next) => {
    passport.authenticate('local.login',(err,user,info) => {
      if(err) {
        console.log(err);
        return next(err);
      }
      if(!user) {
        return res.send({error: info});
      }
      req.login(user,loginError => {
        if(loginError) {
          console.log(loginError);
          return next(loginError);
        }
        return res.send(user);
      });
    })(req,res,next);
  });

  app.get('/api/logout', (req,res) => {
    req.logout();
    res.sendStatus(200);
  });

  app.post('/api/resetPassword', async (req,res) => {
    try {
      const {email} = req.body;
      const user = await User.findOne({
        email
      });
      if(user) {
        const token = crypto.randomBytes(25).toString('hex');
        user.resetPasswordToken = token;
        await Promise.all([
          sendResetPasswordEmail(email,token),
          user.save()
        ]);
        res.send(email);
      }
      else {
        res.send({
          error: 'User doesn\'t exist'
        });
      }
    }
    catch(error) {
      console.log(error);
      res.sendStatus(500);
    }
  });

  app.get('/api/resetPasswordSuccess/:token', async (req,res) => {
    try {
      const {token} = req.params;
      const user = await User.findOne({
        resetPasswordToken: token
      });
      if(user) {
        res.redirect(`/setPassword/${token}`);
      }
      else {
        res.send('User with this that token doesn\'t exist');
      }
    }
    catch(error) {
      console.log(error);
      res.sendStatus(500);
    }
  });


  app.post('/api/setPassword',validateSetPassword,async (req,res) => {
    try {
      const {password,token} = req.body;
      const user = await User.findOne({
        resetPasswordToken: token
      });
      if(user) {
        user.password = user.encryptPassword(password);
        await user.save();
        res.status(200).send('Done');
      }
      else {
        res.send({error: 'User doesn\'t exist'});
      }
    }
    catch(error) {
      console.log(error);
      res.sendStatus(500);
    }
  });
};