import {fromJS} from 'immutable';
import {
  FETCH_CONTACTS_SUCCESS,
  EDIT_CONTACTS_START
} from '../actions/types';

const initialState = fromJS({
  list: null,
  loading: false
});

export default (state = initialState, {type,payload}) => {
  switch (type) {
    case FETCH_CONTACTS_SUCCESS:
      return state.merge({
        list: fromJS(payload),
        loading: false
      });
    case EDIT_CONTACTS_START:
      return state.set('loading',true);
    default:
      return state;
  }
};