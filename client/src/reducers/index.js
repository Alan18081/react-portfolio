import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import auth from './auth';
import skills from './skills';
import profile from './profile';
import serverError from './serverError';
import projects from './projects';
import tech from './tech';
import emails from './emails';
import contacts from './contacts';

const rootReducer = combineReducers({
  form: formReducer,
  auth,
  skills,
  profile,
  serverError,
  projects,
  tech,
  emails,
  contacts
});

export default rootReducer;