import validateEmails from './validateEmails';
import isValidEmail from 'is-valid-email';

export default (fields,values) => {
  const errors = {};
  errors.recipients = validateEmails(values.recipients);
  fields.forEach(({name,noValueError}) => {
    if(!values[name]) {
      errors[name] = noValueError;
    }
    else if(name === 'from' && !isValidEmail(values[name])) {
      errors[name] = noValueError;
    }
  });
  return errors;
};