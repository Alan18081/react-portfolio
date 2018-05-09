const User = require('../models/User');
const passport = require('passport');
const validateLogin = require('../middlewares/validateLogin');

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

};