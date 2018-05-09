import {fromJS} from  'immutable';
import {
  FETCH_TECHS_SUCCESS,
  ADD_TECH_SUCCESS,
  ADD_TECH_START,
  REMOVE_TECH_SUCCESS
} from '../actions/types';

const initialState = fromJS({
  list: fromJS([]),
  loading: false,
  fetched: false
});

export default (state = initialState,{type,payload}) => {
  switch (type) {
    case FETCH_TECHS_SUCCESS:
      return state.merge({
        list: fromJS(payload),
        fetched: true
      });
    case ADD_TECH_START:
      return state.set('loading',true);
    case ADD_TECH_SUCCESS:
      return state.merge({
        loading: false,
        list: state.get('list').push(fromJS(payload))
      });
    case REMOVE_TECH_SUCCESS:
      return state.update(
        'list',
        list => list.filter(tech => tech.get('_id') !== payload)
      );
    default:
      return state;
  }
};