const {cloudName,cloudKey,cloudSecret} = require('../config/keys');
const cloud = require('cloudinary').v2;

cloud.config({
  cloud_name: cloudName,
  api_key: cloudKey,
  api_secret: cloudSecret
});

exports.uploadImage = name => {
  return new Promise((resolve,reject) => {
    cloud.uploader.upload(name,(error,result) => {
      if(error) reject(error);
      resolve(result);
    });
  });
};

exports.removeImage = id => {
  return new Promise((resolve,reject) => {
    cloud.uploader.destroy(id,(error,result) => {
      if(error) reject(error);
      resolve(result);
    });
  });
};