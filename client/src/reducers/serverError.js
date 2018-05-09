import {
  SET_SERVER_ERROR,
  REMOVE_SERVER_ERROR
} from '../actions/types';

export default (state = '',{type,payload}) => {
  switch (type) {
    case SET_SERVER_ERROR:
      return payload;
    case REMOVE_SERVER_ERROR:
      return false;
    default:
      return state;
  }
};