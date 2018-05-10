const Contacts = require('../models/Contacts');

module.exports = app => {

  app.get('/api/contacts',async (req,res) => {
    try {
      const contacts = await Contacts.findOne({});
      console.log(contacts);
      res.send(contacts);
    }
    catch(error) {
      console.log(error);
      res.sendStatus(500);
    }
  });

  app.post('/api/contacts', async (req,res) => {
    try {
      await Contacts.deleteMany({});
      const contacts = new Contacts(req.body);
      await contacts.save();
      res.send(contacts);
    }
    catch(error) {
      console.log(error);
      res.sendStatus(500);
    }
  });
};