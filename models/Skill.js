const mongoose = require('mongoose');
const {Schema} = mongoose;

const SkillSchema = new Schema({
  name: String,
  skills: [{
    name: String,
    value: {type: Number, default: 0}
  }]
});

module.exports = mongoose.model('Skill',SkillSchema);