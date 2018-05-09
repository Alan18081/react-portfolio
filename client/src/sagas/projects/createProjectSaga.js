import {call,put,takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import createFormData from 'object-to-formdata';
import {
  CREATE_PROJECT
} from '../../actions/types';
import {
  createProjectStart,
  createProjectSuccess,
  setServerError
} from '../../actions/index';

export function* createProjectSaga() {
  yield takeLatest(CREATE_PROJECT,function* ({payload}) {
    try {
      yield put(createProjectStart());
      const formData = createFormData(payload);
      const {data} = yield call(axios.post,'/api/projects',formData);
      yield put(createProjectSuccess(data));
    }
    catch(error) {
      yield put(setServerError('save new project'));
    }
  })
}