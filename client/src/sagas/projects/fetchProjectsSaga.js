import {call,put,take} from 'redux-saga/effects';
import axios from 'axios';
import {
  FETCH_PROJECTS
} from '../../actions/types';
import {
  fetchProjectsSuccess,
  setServerError,
  removeServerError
} from '../../actions';

export function* fetchProjectsSaga() {
  try {
    yield take(FETCH_PROJECTS);
    yield put(removeServerError());
    const {data} = yield call(axios.get,'/api/projects');
    yield put(fetchProjectsSuccess(data));
  }
  catch (error) {
    yield put(setServerError('load this page'));
  }
}