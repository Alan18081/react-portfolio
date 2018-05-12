import {fromJS} from 'immutable';
import {
  FETCH_ADMIN_SUCCESS,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  RESET_PASSWORD_START,
  RESET_PASSWORD_FAILED,
  RESET_PASSWORD_SUCCESS,
  SET_PASSWORD_START,
  SET_PASSWORD_SUCCESS,
  SET_PASSWORD_FAILED,
  LOGOUT_SUCCESS
} from '../actions/types';

const initialState = fromJS({
  admin: null,
  loginErrors: null,
  loading: false,
  resetPasswordError: null,
  resetPasswordSuccess: false,
  setPasswordError: null,
  setPasswordSuccess: false
});

export default (state = initialState,{type,payload}) => {
  switch (type) {
    case SET_PASSWORD_START:
      return state.merge({
        loading: true,
        setPasswordError: null,
        setPasswordSuccess: false
      });
    case SET_PASSWORD_SUCCESS:
      return state.merge({
        loading: false,
        setPasswordSuccess: true
      });
    case SET_PASSWORD_FAILED:
      return state.merge({
        loading: false,
        setPasswordError: payload
      });
    case RESET_PASSWORD_FAILED:
      return state.merge({
        loading: false,
        resetPasswordError: payload
      });
    case RESET_PASSWORD_SUCCESS:
      return state.merge({
        loading: false,
        resetPasswordSuccess: payload
      });
    case RESET_PASSWORD_START:
      return state.merge({
        loading: true,
        resetPasswordError: null,
        resetPasswordSuccess: false
      });
    case LOGOUT_SUCCESS:
      return state.set('admin',false);
    case LOGIN_SUCCESS:
      return state.merge({
        admin: fromJS(payload),
        loading: false
      });
    case LOGIN_FAILED:
      return state.merge({
        loginErrors: payload,
        loading: false
      });
    case LOGIN_START:
      return state.set('loading',true);
    case FETCH_ADMIN_SUCCESS:
      return state.set('admin',fromJS(payload));
    default:
      return state;
  }
};