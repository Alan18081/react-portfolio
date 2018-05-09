const mongoose = require('mongoose');
const {Schema} = mongoose;

const ContactsSchema = new Schema({
  skype: String,
  linkedIn: String,
  vk: String,
  email: String,
  github: String,
  facebook: String
});

module.exports = mongoose.model('Contacts',ContactsSchema);