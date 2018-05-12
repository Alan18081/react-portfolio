import {
  FETCH_ADMIN_SUCCESS,
  FETCH_ADMIN,
  LOGIN,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  RESET_PASSWORD_START,
  RESET_PASSWORD,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILED,
  SET_PASSWORD,
  SET_PASSWORD_START,
  SET_PASSWORD_SUCCESS,
  SET_PASSWORD_FAILED,
  LOGOUT,
  LOGOUT_SUCCESS
} from './types';

export const setPassword = (password,confirmPassword,token) => ({
  type: SET_PASSWORD,
  payload: {
    password,
    confirmPassword,
    token
  }
});

export const setPasswordStart = () => ({
  type: SET_PASSWORD_START
});

export const setPasswordSuccess = () => ({
  type: SET_PASSWORD_SUCCESS
});

export const setPasswordFailed = () => ({
  type: SET_PASSWORD_FAILED
});

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

export const resetPassword = (email) => ({
  type: RESET_PASSWORD,
  payload: email
});

export const resetPasswordStart = () => ({
  type: RESET_PASSWORD_START
});

export const resetPasswordSuccess = (email) => ({
  type: RESET_PASSWORD_SUCCESS,
  payload: email
});

export const resetPasswordFailed = (error) => ({
  type: RESET_PASSWORD_FAILED,
  payload: error
});

export const logout = () => ({
  type: LOGOUT
});

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS
});