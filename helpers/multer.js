const path = require('path');
const {staticPath} = require('../config/keys');
const multer = require('multer');
const fs = require('fs');
const mime = require('mime-types');

module.exports = (folder) => {
  const storage = multer.diskStorage({
    destination: (req,file,cb) => {
      if(req.body.projectName) {
        const folderPath = path.join(staticPath,folder);
        const projectPath = path.join(staticPath,folder,req.body.projectName);
        if(!fs.existsSync(folderPath)) {
          fs.mkdirSync(folderPath);
          fs.mkdirSync(projectPath);
        }
        if(!fs.existsSync(projectPath)) {
          fs.mkdirSync(projectPath);
        }
        return cb(null,projectPath);
      }
      else {
        return cb(null,path.join(staticPath,folder));
      }
    },
    filename: (req,file,cb) => {
      let filename = file.originalname;
      if(folder === 'profile') {
        filename = `${file.fieldname}.${mime.extension(file.mimetype)}`;
      }
      return cb(null,filename);
    }
  });
  return multer({storage});
};