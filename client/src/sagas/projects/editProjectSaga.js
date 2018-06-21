import {call,put,takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import createFormData from 'object-to-formdata';
import {
  EDIT_PROJECT
} from '../../actions/types';
import {
  editProjectStart,
  editProjectSuccess,
  setServerError
} from '../../actions/index';

export function* editProjectSaga() {
  yield takeLatest(EDIT_PROJECT,function* ({payload}) {
    try {
      yield put(editProjectStart());
      console.log(payload);
      debugger;
      const formData = createFormData(payload);
      const {data} = yield call(axios.put,`/api/projects/${payload._id}`,formData);
      yield put(editProjectSuccess(data));
    }
    catch (error) {
      yield put(setServerError('save edited project'));
    }
  })
}