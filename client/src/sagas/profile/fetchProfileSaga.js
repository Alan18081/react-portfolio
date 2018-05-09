import {call,put,take} from 'redux-saga/effects';
import axios from 'axios';
import {
  FETCH_PROFILE
} from '../../actions/types';
import {
  fetchProfileSuccess,
  setServerError,
  removeServerError
} from '../../actions';

export function* fetchProfileSaga() {
  try {
    yield take(FETCH_PROFILE);
    yield put(removeServerError());
    const {data} = yield call(axios.get,'/api/profile');
    yield put(fetchProfileSuccess(data));
  }
  catch(error) {
    yield put(setServerError('load this page'));
  }
}