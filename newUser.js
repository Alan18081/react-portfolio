const bcrypt = require('bcrypt-nodejs');
const mongoose = require('mongoose');
const {mongoURI} = require('./config/keys');
const prompt = require('prompt');
const User = require('./models/User');

mongoose.connect(mongoURI).then(() => {
  prompt.start();
  prompt.get(['Email','Password'],async (err,result) => {
    try {
      if(err) return console.log(err);
      await User.deleteOne({});
      const user = new User({
        email: result.Email
      });
      user.password = user.encryptPassword(result.Password);
      await user.save();
      console.log('User successfully created');
    }
    catch(error) {
      console.log(error);
    }
  });
});