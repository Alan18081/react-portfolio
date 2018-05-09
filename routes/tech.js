const Tech = require('../models/Tech');

module.exports = app => {

  app.get('/api/tech', async (req,res) => {
    try {
      const techs = await Tech.find({});
      res.send(techs);
    }
    catch(error) {
      console.log(error);
      res.sendStatus(500);
    }
  });

  app.post('/api/tech', async (req,res) => {
    try {
      const newTech = new Tech(req.body);
      await newTech.save();
      res.send(newTech);
    }
    catch(error) {
      console.log(error);
      res.sendStatus(500);
    }
  });

  app.delete('/api/tech/:id', async (req,res) => {
    try {
      const {id} = req.params;
      await Tech.deleteOne({
        _id: id
      });
      res.sendStatus(200);
    }
    catch(error) {
      console.log(error);
      res.sendStatus(500);
    }
  });
};