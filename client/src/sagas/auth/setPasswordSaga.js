import {call,put,takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import {
  SET_PASSWORD
} from '../../actions/types';
import {
  setServerError,
  setPasswordStart,
  setPasswordSuccess,
  setPasswordFailed
} from '../../actions';

export function* setPasswordSaga() {
  yield takeLatest(SET_PASSWORD,function* ({payload}) {
    try {
      yield put(setPasswordStart());
      const {data} = yield call(axios.post,'/api/setPassword',payload);
      if(data.error) {
        yield put(setPasswordFailed(data.error));
      }
      else {
        yield put(setPasswordSuccess());
      }
    }
    catch(error) {
      yield put(setServerError('create new password'));
    }
  })
}

