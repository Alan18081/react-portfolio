const mongoose = require('mongoose');
const {Schema} = mongoose;

const ProjectSchema = new Schema({
  projectName: String,
  appType: {type: String,default: 'Web-application'},
  link: String,
  mainImageUrl: String,
  mainImageId: String,
  functions: [String],
  technologies: [{type: Schema.Types.ObjectId, ref: 'Tech'}],
  images: [{
    url: String,
    publicId: String
  }]
});

module.exports = mongoose.model('Project',ProjectSchema);