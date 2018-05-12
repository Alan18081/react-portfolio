const mailer = require('@sendgrid/mail');
const emailTemplate = require('./templates/emailTemplate');
const resetPasswordTemplate = require('./templates/resetPasswordTemplate');
const {sendgridKey,email: myEmail} = require('../../config/keys');

mailer.setApiKey(sendgridKey);

exports.sendEmail = (email) => {
  mailer.send({
    to: email.email,
    from: myEmail,
    subject: email.name,
    text: email.message,
    html: emailTemplate(email)
  });
};

exports.sendResetPasswordEmail = (email,token) => {
    mailer.send({
      to: email,
      from: myEmail,
      subject: 'Reset password email',
      html: resetPasswordTemplate(email,token)
    });
};