const Email = require('../models/Email');
const {sendEmail} = require('../services/sendgrid/mailer');

module.exports = app => {

  app.get('/api/emails', async (req,res) => {
    try {
      const emails = await Email.find({});
      res.send(emails);
    }
    catch(error) {
      console.log(error);
      res.sendStatus(500);
    }
  });

  app.post('/api/emails', async (req,res) => {
    try {
      sendEmail(req.body);
      const newEmail = new Email(req.body);
      await newEmail.save();
      res.send(newEmail);
    }
    catch(error) {
      console.log(error);
      res.sendStatus(500);
    }
  });

  app.delete('/api/emails/:id', async (req,res) => {
    try {
      const {id} = req.params;
      await Email.deleteOne({
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