const path = require('path');
const {staticPath} = require('../config/keys');
const multer = require('multer');
const fs = require('fs');
const mime = require('mime-types');

module.exports = (folder) => {
  const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        return cb(null,path.join(staticPath,folder));
    },
    filename: (req,file,cb) => {
      let filename = file.originalname;
      if(folder === 'profile') {
        filename = `${file.fieldname}.${mime.extension(file.mimetype)}`;
      }
      return cb(null,Date.now() + filename);
    }
  });
  return multer({storage});
};