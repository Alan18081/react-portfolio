import {call,put,take} from 'redux-saga/effects';
import axios from 'axios';
import {
  FETCH_ADMIN
} from '../../actions/types';
import {
  fetchAdminSuccess,
  setServerError
} from '../../actions/index';

export function* fetchAdminSaga() {
  yield take(FETCH_ADMIN);
  try {
    const {data} = yield call(axios.get,'/api/admin');
    yield put(fetchAdminSuccess(data));
  }
  catch(error) {
    yield put(setServerError('load this page'));
  }
}