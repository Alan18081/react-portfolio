const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt-nodejs');

const UserSchema = new Schema({
  email: String,
  password: String,
  name: {type: String, default: 'Alex Ostapuik'},
  profession: {type: String, default: 'Front-end developer'},
  story: String,
  avatar: {type: String, default: 'avatar.jpg'},
  photo: {type: String, default: 'photo.jpg'},
  resetPasswordToken: String
});

UserSchema.methods.encryptPassword = password => {
  return bcrypt.hashSync(password,bcrypt.genSaltSync(10))
};

UserSchema.methods.validatePassword = function(password) {
  return bcrypt.compareSync(password,this.password);
};

module.exports = mongoose.model('User',UserSchema);