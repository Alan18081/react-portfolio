import {
  SET_SERVER_ERROR,
  REMOVE_SERVER_ERROR
} from './types';

export const setServerError = (message) => ({
  type: SET_SERVER_ERROR,
  payload: message
});

export const removeServerError = () => ({
  type: REMOVE_SERVER_ERROR
});