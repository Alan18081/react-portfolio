const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const keys = require('../config/keys');

const User = require('../models/User');

passport.serializeUser((user,done) => {
  done(null,user.id);
});

passport.deserializeUser((id,done) => {
  User.findById(id).then(user => done(null,user));
});


passport.use('local.login',new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  },
  async (req,email,password,done) => {
    try {
      console.log(email,password);
      const user = await User.findOne({
        email
      });
      if(!user) {
        return done(null,false,'User doesn\'t exist');
      }
      if(!user.validatePassword(password)) {
        return done(null,false,'Incorrect password');
      }
      return done(null,user);
    }
    catch (error) {
      console.log(error);
      return done(error);
    }
  }
));