const User = require('../models/User');
const path = require('path');
const upload = require('../helpers/multer')();
const {uploadImage,removeImage} = require('../helpers/cloudinary');

module.exports = app => {

  app.get('/api/profile', async (req,res) => {
    try {
      const profile = await User.findOne(
        {},
        {
          name: 1,
          profession: 1,
          story: 1,
          avatarUrl: 1,
          photoUrl: 1
        }
      );
      res.send(profile);
    }
    catch(error) {
      console.log(error);
      res.sendStatus(500);
    }
  });

  app.put('/api/profile',upload.any(),async (req,res) => {
    try {
      const newProfile = req.body;
      const profile = await User.findOne({});
      if(profile.avatarId) {
        const res = await removeImage(profile.avatarId);
        console.log(res);
      }
      if(profile.photoId) {
        const res = await removeImage(profile.photoId);
        console.log(res);
      }
      for(let file of req.files) {
        const {url,public_id} = await uploadImage(file.path);
        newProfile[`${file.fieldname}Url`] = url;
        newProfile[`${file.fieldname}Id`] = public_id;
      }
      const user = await User.findOneAndUpdate(
        { _id: req.user._id },
        newProfile,
        {new: true}
      );
      res.send(user);
    }
    catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });

};