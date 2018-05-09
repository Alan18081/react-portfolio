const mongoose = require('mongoose');
const {Schema} = mongoose;

const TechSchema = new Schema({
  name: String,
  icon: String,
  wordmark: String
});

module.exports = mongoose.model('Tech',TechSchema);