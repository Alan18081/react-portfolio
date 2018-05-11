import {fromJS} from 'immutable';
import {
  CREATE_PROJECT_START,
  CREATE_PROJECT_SUCCESS,
  FETCH_PROJECTS_SUCCESS,
  EDIT_PROJECT_START,
  EDIT_PROJECT_SUCCESS,
  SET_ACTIVE_PROJECT,
  RESET_DONE,
  REMOVE_PROJECT_START,
  REMOVE_PROJECT_SUCCESS,
  IMAGE_START
} from '../actions/types';

const initialState = fromJS({
  list: null,
  activeProject: null,
  loading: false,
  imageLoading: false,
  done: false
});

export default (state = initialState,{type,payload}) => {
  switch (type) {
    case RESET_DONE:
      return state.set('done',false);
    case REMOVE_PROJECT_START:
      return state.set('loading',true);
    case IMAGE_START:
      return state.set('imageLoading',true);
    case REMOVE_PROJECT_SUCCESS:
      return state.merge({
        loading: false,
        done: true
      })
        .update(
          'list',
          projects => projects.filter(project => project.get('_id') !== payload)
        );
    case SET_ACTIVE_PROJECT:
      return state.set(
        'activeProject',
        payload
      );
    case EDIT_PROJECT_START:
      return state.set('loading',true);
    case EDIT_PROJECT_SUCCESS:
      return state.merge({
        imageLoading: false,
        loading: false,
        list: state.get('list').update(
          state.get('list').find(project => project.get('_id') === payload._id),
          project => fromJS(payload)
        )
      });
    case FETCH_PROJECTS_SUCCESS:
      return state.set(
        'list',
        fromJS(payload)
      );
    case CREATE_PROJECT_START:
      return state.set('loading',true);
    case CREATE_PROJECT_SUCCESS:
      return state.merge({
        loading:false,
        done: true
      }).update(
        'list',
        projects => projects.push(fromJS(payload))
      );
    default:
      return state;
  }
}