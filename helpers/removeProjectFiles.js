const fs = require('fs');
const path = require('path');
const {staticPath} = require('../config/keys');

module.exports = filename => {
  const fullFilename = path.join(staticPath,'projects',filename);
  if(fs.existsSync(fullFilename)) {
    fs.unlinkSync(fullFilename);
  }
};