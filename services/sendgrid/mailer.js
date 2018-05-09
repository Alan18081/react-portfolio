const mailer = require('@sendgrid/mail');
const emailTemplate = require('./emailTemplate');
const {sendgridKey,email: myEmail} = require('../../config/keys');
mailer.setApiKey(sendgridKey);

module.exports = (email) => {
  mailer.send({
    to: email.email,
    from: myEmail,
    subject: email.name,
    text: email.message,
    html: emailTemplate(email)
  });
};