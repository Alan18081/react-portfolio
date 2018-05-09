import {fromJS} from  'immutable';
import {
  FETCH_EMAILS_SUCCESS,
  SEND_EMAIL_START,
  SEND_EMAIL_SUCCESS,
  REMOVE_EMAIL_SUCCESS
} from '../actions/types';

const initialState = fromJS({
  list: fromJS([]),
  loading: false,
  sent: false
});

export default (state = initialState,{type,payload}) => {
  switch (type) {
    case FETCH_EMAILS_SUCCESS:
      return state.set(
        'list',
        fromJS(payload)
      );
    case SEND_EMAIL_START:
      return state.set({
        loading: true,
        sent: false
      });
    case SEND_EMAIL_SUCCESS:
      return state.merge({
        loading: false,
        sent: true
      });
    case REMOVE_EMAIL_SUCCESS:
      return state.update(
        'list',
        list => list.filter(tech => tech.get('_id') !== payload)
      );
    default:
      return state;
  }
};