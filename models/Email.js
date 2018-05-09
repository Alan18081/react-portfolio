const mongoose = require('mongoose');
const {Schema} = mongoose;

const EmailSchema = new Schema({
  name: String,
  email: String,
  date: Date,
  message: String
});

module.exports = mongoose.model('Email',EmailSchema);