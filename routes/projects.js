const Project = require('../models/Project');
const removeProjectFile = require('../helpers/removeProjectFiles');
const upload = require('../helpers/multer')();
const {uploadImage,removeImage} = require('../helpers/cloudinary');

module.exports = app => {

  app.get('/api/projects', async (req,res) => {
    try {
      const projects = await Project.find({}).populate('technologies');
      res.send(projects);
    }
    catch(error) {
      console.log(error);
      res.sendStatus(500);
    }
  });

  app.post('/api/projects',upload.fields([{name: 'mainImage',maxCount: 1},{name: 'images[]'}]), async (req,res) => {
    try {
      const newProject = new Project({
        images: [],
        technologies: [],
        ...req.body
      });
      if(req.files['images[]']) {
        for(let file of req.files['images[]']) {
          const {url,public_id} = await uploadImage(file.path);
          newProject.images.push({
            url,
            publicId: public_id
          });
        }
      }
      if(req.files.mainImage) {
        const {url,public_id} = await uploadImage(req.files.mainImage[0].path);
        newProject.mainImageUrl = url;
        newProject.mainImageId = public_id;
      }
      await newProject.save();
      res.send(newProject);
    }
    catch(error) {
      console.log('Error',error);
      res.sendStatus(500);
    }
  });

  app.put('/api/projects/:id', upload.single('mainImage'), async (req,res) => {
    try {
      const {id} = req.params;
      const project = await Project.findOneAndUpdate(
        {
          _id: id
        },
        {
          ...req.body
        },
        {new: true}
      ).populate('technologies');
      if(req.file) {
        await removeImage(project.mainImageId);
        const {url,public_id} = await uploadImage(req.file.path);
        project.mainImageUrl = url;
        project.mainImageId = public_id;
        await project.save();
      }
      res.send(project);
    }
    catch(error) {
      console.log(error);
      res.sendStatus(500);
    }
  });

  app.delete('/api/projects/:id', async (req,res) => {
    try {
      const {id} = req.params;
      const project = await Project.findOne({_id: id});
      if(project.mainImage) {
        await removeImage(project.mainImageId);
      }
      if(project.images.length) {
        project.images.forEach(async ({publicId}) => {
          await removeImage(publicId);
        });
      }
      await Project.deleteOne({_id:id});
      res.sendStatus(200);
    }
    catch(error) {
      console.log(error);
      res.sendStatus(500);
    }
  });

  app.post('/api/projects/:id/images',upload.single('image'),async (req,res) => {
    try {
      const {id} = req.params;
      const {url,public_id} = await uploadImage(req.file.path);
      const project = await Project.findOneAndUpdate(
        {
          _id: id
        },
        {
          $push: {images: {
            url,
            publicId: public_id
          }}
        },
        {new: true}
      );
      res.send(project);
    }
    catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });

  app.delete('/api/projects/:id/:imageId', async (req,res) => {
    try {
      const {id,imageId} = req.params;
      await removeImage(imageId);
      const project = await Project.findOneAndUpdate(
        {
          _id: id
        },
        {
          $pull: {images: {publicId: imageId} }
        },
        {new: true}
      );
      res.send(project);
    }
    catch(error) {
      console.log(error);
      res.sendStatus(500);
    }
  });
};