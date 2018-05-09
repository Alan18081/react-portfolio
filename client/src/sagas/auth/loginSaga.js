import {call,put,takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import {
  LOGIN
} from '../../actions/types';
import {
  loginStart,
  loginSuccess,
  loginFailed,
  setServerError
} from '../../actions/index';

export function* loginSaga() {
  yield takeLatest(LOGIN,function* ({payload}) {
    try {
      yield put(loginStart());
      const {data} = yield call(axios.post,'/api/login',payload);
      if(data.errors) {
        yield put(loginFailed(data.errors));
      }
      else {
        yield put(loginSuccess(data));
      }
    }
    catch(error) {
      yield put(setServerError('login'));
    }
  })
}