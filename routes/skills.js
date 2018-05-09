const Skill = require('../models/Skill');

module.exports = app => {

  app.get('/api/skills',async (req,res) => {
    try {
      const skills = await Skill.find({});
      res.send(skills);
    }
    catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });
  app.post('/api/skills',async (req,res) => {
    try {
      await Skill.deleteMany({});
      await Promise.all(
        req.body.map(category => {
          const newCategory = new Skill(category);
          return newCategory.save();
        })
      );
      res.sendStatus(200);
    }
    catch(error) {
      console.log(error);
      res.sendStatus(500);
    }
  });

};