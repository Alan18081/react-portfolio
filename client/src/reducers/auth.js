import {fromJS} from 'immutable';
import {
  FETCH_ADMIN_SUCCESS,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT_SUCCESS
} from '../actions/types';

const initialState = fromJS({
  admin: null,
  loginErrors: null,
  loginLoading: false,
  resetLoading: false,
  resetPasswordErrors: null
});

export default (state = initialState,{type,payload}) => {
  switch (type) {
    case LOGOUT_SUCCESS:
      return state.set('admin',false);
    case LOGIN_SUCCESS:
      return state.merge({
        admin: fromJS(payload),
        loginLoading: false
      });
    case LOGIN_FAILED:
      return state.merge({
        loginErrors: payload,
        loginLoading: false
      });
    case LOGIN_START:
      return state.set('loginLoading',true);
    case FETCH_ADMIN_SUCCESS:
      return state.set('admin',fromJS(payload));
    default:
      return state;
  }
};