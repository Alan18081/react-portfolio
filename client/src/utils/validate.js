import isValidEmail from 'is-valid-email';

export const validateEmail = ({name,email,message}) => {
  const errors = {};
  if(!name) {
    errors.name = 'Write your name'
  }
  if(!email) {
    errors.email = 'Write your email, please';
  }
  else if(!isValidEmail(email)) {
    errors.email = 'Write your email properly, please';
  }
  if(!message) {
    errors.message = 'Write your message, please';
  }
  return errors;
};

export const validateLogin = ({email,password}) => {
  const errors = {};
  if(!email) {
    errors.email = 'Write your email, please';
  }
  else if(!isValidEmail(email)) {
    errors.email = 'Write your email properly, please';
  }
  if(!password) {
    errors.password = 'Write your password, please';
  }
  else if(password.length < 6) {
    errors.password = 'Password should have 6 or more characters';
  }
  return errors;
};

export const validateProfile = ({name,profession,story}) => {
  const errors = {};
  if(!name) {
   errors.name = 'Your name cannot be empty';
  }
  if(!profession) {
    errors.profession = 'You profession cannot be empty';
  }
  if(!story) {
    errors.story = 'Your story cannot be empty';
  }
  return errors;
};

export const validateSkill = ({name}) => {
  const errors = {};
  if(!name) {
    errors.name = 'Name cannot be empty';
  }
  return errors;
};

export const validateProject = ({projectName,link}) => {
  const errors = {};
  if(!projectName) {
    errors.name = 'Project should have name';
  }
  if(!link) {
    errors.link = 'Project should have link';
  }
  return errors;
};

export const validateTech = ({name,icon}) => {
  const errors = {};
  if(!name) {
    errors.name = 'Tech should have name';
  }
  if(!icon) {
    errors.icon = 'Tech should have icon';
  }
  return errors;
};

export const validateSetPassword = ({password,confirmPassword}) => {
  const errors = {};
  if(!password) {
    errors.password = 'Password cannot be empty';
  }
  else if(password.length < 6) {
    errors.password = 'Password should have at least 6 characters';
  }
  else if(password !== confirmPassword) {
    errors.password = 'Passwords should match';
  }

  if(!confirmPassword) {
    errors.confirmPassword = 'Password cannot be empty';
  }
  else if(confirmPassword.length < 6) {
    errors.confirmPassword = 'Password should have at least 6 characters';
  }
  else if(password !== confirmPassword) {
    errors.confirmPassword = 'Passwords should match';
  }
  return errors;
};