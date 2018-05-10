import {call,put,takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import {
  REMOVE_PROJECT
} from '../../actions/types';
import {
  removeProjectSuccess,
  setServerError
} from '../../actions/index';

export function* removeProjectSaga() {
  yield takeLatest(REMOVE_PROJECT,function* ({payload}) {
    try {
      yield call(axios.delete,`/api/projects/${payload}`);
      yield put(removeProjectSuccess(payload));
    }
    catch (error) {
      yield put(setServerError('remove project'));
    }
  })
}