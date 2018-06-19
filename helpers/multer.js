const {staticPath} = require('../config/keys');
const multer = require('multer');

module.exports = () => {
  const storage = multer.diskStorage({
    destination: staticPath,
    filename: (req,file,cb) => {
      return cb(null,file.originalname);
    }
  });
  return multer({storage});
};