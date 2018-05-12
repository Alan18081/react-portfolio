import {call,put,takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import {
  RESET_PASSWORD
} from '../../actions/types';
import {
  resetPasswordStart,
  resetPasswordSuccess,
  resetPasswordFailed,
  setServerError
} from '../../actions';

export function* resetPasswordSaga() {
  yield takeLatest(RESET_PASSWORD,function* ({payload}) {
    try {
      yield put(resetPasswordStart());
      const {data} = yield call(axios.post,'/api/resetPassword',payload);
      if(data.error) {
        yield put(resetPasswordFailed(data.error));
      }
      else {
        yield put(resetPasswordSuccess(data));
      }
    }
    catch(error) {
      yield put(setServerError('reset password'));
    }
  })
}