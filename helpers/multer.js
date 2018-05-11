const path = require('path');
const {staticPath} = require('../config/keys');
const multer = require('multer');
const fs = require('fs');
const mime = require('mime-types');
//
module.exports = () => {
  const storage = multer.diskStorage({
    destination: staticPath,
    filename: (req,file,cb) => {
      return cb(null,file.originalname);
    }
  });
  return multer({storage});
};