import {takeLatest,call,put} from 'redux-saga/effects';
import axios from 'axios';
import {
  REMOVE_EMAIL
} from '../../actions/types';
import {
  removeEmailSuccess,
  setServerError
} from '../../actions';

export function* removeEmail() {
  yield takeLatest(REMOVE_EMAIL,function* ({payload}) {
    try {
      yield call(axios.delete,`/api/emails/${payload}`);
      yield put(removeEmailSuccess(payload));
    }
    catch(error) {
      yield put(setServerError('remove email'));
    }
  });
}