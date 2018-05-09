import {call,put,takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import {
  REMOVE_TECH
} from  '../../actions/types';
import {
  removeTechSuccess,
  setServerError
} from '../../actions';

export function* removeTechSaga() {
  yield takeLatest(REMOVE_TECH,function* ({payload}) {
    try {
      yield call(axios.delete,`/api/tech/${payload}`);
      yield put(removeTechSuccess(payload));
    }
    catch (error) {
      yield put(setServerError('remove technology'));
    }
  })
}