const emailRegularExpression = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default emails => {
  if(!emails) return;
  if(emails.charAt(emails.length - 1) === ',') {
    emails = emails.substring(0,emails.length - 2);
  }
  const invalidEmails = emails
    .split(',')
    .map(email => email.trim())
    .filter(email => emailRegularExpression.test(email) === false);

  if(invalidEmails.length) {
    return `This emails are invalid: ${invalidEmails}`;
  }
  return;
}