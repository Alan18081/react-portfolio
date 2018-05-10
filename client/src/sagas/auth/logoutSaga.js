import {call,put,takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import {
  LOGOUT
} from '../../actions/types';
import {
  logoutSuccess,
  setServerError
} from '../../actions/index';

export function* logoutSaga() {
  yield takeLatest(LOGOUT,function* () {
    try {
      yield call(axios.get,'/api/logout');
      yield put(logoutSuccess());
    }
    catch(error) {
      yield put(setServerError('logout'));
    }
  })
}