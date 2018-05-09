import {fromJS} from 'immutable';
import {
  FETCH_PROFILE_SUCCESS,
  EDIT_PROFILE_START
} from '../actions/types';

const initialState = fromJS({
  data: fromJS({}),
  loading: false
});

export default (state = initialState,{type,payload}) => {
  switch (type) {
    case EDIT_PROFILE_START:
      return state.set('loading',true);
    case FETCH_PROFILE_SUCCESS:
      return state.merge({
        data: fromJS(payload),
        loading: false
      });
    default:
      return state;
  }
}