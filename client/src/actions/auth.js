import {
  FETCH_ADMIN_SUCCESS,
  FETCH_ADMIN,
  LOGIN,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT,
  LOGOUT_SUCCESS
} from './types';

export const fetchAdmin = () => ({
  type: FETCH_ADMIN
});

export const fetchAdminSuccess = (user) => ({
  type: FETCH_ADMIN_SUCCESS,
  payload: user
});

export const login = (info) => ({
  type: LOGIN,
  payload: info
});

export const loginStart = () => ({
  type: LOGIN_START
});

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user
});

export const loginFailed = (errors) => ({
  type: LOGIN_FAILED,
  payload: errors
});

export const logout = () => ({
  type: LOGOUT
});

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS
});