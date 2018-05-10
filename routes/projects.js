const Project = require('../models/Project');
const removeProjectFile = require('../helpers/removeProjectFiles');
const upload = require('../helpers/multer')('projects');


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
          newProject.images.push(file.filename);
        }
      }
      newProject.mainImage = req.files.mainImage[0].filename;
      await newProject.save();
      const project = await Project.findOne({
        _id: newProject._id
      }).populate('technologies');
      res.send(project);
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
      );
      if(req.file) {
        const oldMainImage = project.mainImage;
        removeProjectFile(oldMainImage);
        project.mainImage = req.file.filename;
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
      removeProjectFile(project.mainImage);
      project.images.forEach(removeProjectFile);
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
      const project = await Project.findOneAndUpdate(
        {
          _id: id
        },
        {
          $push: {images: req.file.filename}
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

  app.delete('/api/projects/:id/:imageName', async (req,res) => {
    try {
      const {id,imageName} = req.params;
      removeProjectFile(imageName);
      const project = await Project.findOneAndUpdate(
        {
          _id: id
        },
        {
          $pull: {images: imageName}
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