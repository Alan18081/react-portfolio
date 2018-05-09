const User = require('../models/User');
const upload = require('../helpers/multer')('profile');

module.exports = app => {

  app.get('/api/profile', async (req,res) => {
    try {
      const profile = await User.findOne(
        {},
        {
          name: 1,
          profession: 1,
          story: 1,
          avatar: 1,
          photo: 1
        }
      );
      res.send(profile);
    }
    catch(error) {
      console.log(error);
      res.sendStatus(500);
    }
  });

  app.put('/api/profile',upload.fields([{name: 'avatar',maxCount: 1},{name: 'photo',maxCount: 1}]),async (req,res) => {
    try {
      const profile = {
        ...req.body
      };
      console.log(req.files);
      for(let name in req.files) {
        const file = req.files[name][0];
        profile[name] = file.filename;
      }
      const user = await User.findOneAndUpdate(
        { _id: req.user._id },
        profile,
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