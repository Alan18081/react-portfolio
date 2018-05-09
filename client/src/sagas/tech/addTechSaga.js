import {call,put,takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import {
  ADD_TECH
} from  '../../actions/types';
import {
  addTechSuccess,
  setServerError
} from '../../actions';

export function* addTechSaga() {
  yield takeLatest(ADD_TECH,function* ({payload}) {
    try {
      const {data} = yield call(axios.post,'/api/tech',payload);
      yield put(addTechSuccess(data));
    }
    catch (error) {
      yield put(setServerError('add new technology'));
    }
  })
}