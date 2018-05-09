const path = require('path');
const {staticPath} = require('../config/keys');
const fs = require('fs');

exports.saveImage = (file,filename) => {
  file.pipe(fs.createWriteStream(path.join(staticPath,filename)));
  fs.unlinkSync(file.path);
  return filename;
};

exports.removeImage = (filename) => {
  const fullFilename = path.join(staticPath,filename);
  if(fs.existsSync(fullFilename)) {
    fs.unlinkSync(fullFilename);
  }
};