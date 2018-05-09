import {takeLatest,call,put} from 'redux-saga/effects';
import axios from 'axios';
import {
  SEND_EMAIL
} from '../../actions/types';
import {
  sendEmailSuccess,
  sendEmailStart,
  setServerError
} from '../../actions';

export function* sendEmailSaga() {
  yield takeLatest(SEND_EMAIL,function* ({payload}) {
    try {
      yield put(sendEmailStart());
      yield call(axios.post,'/api/emails',payload);
      yield put(sendEmailSuccess());
    }
    catch(error) {
      yield put(setServerError('send email'));
    }
  })
}