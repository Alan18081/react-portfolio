import {takeLatest,call,put} from 'redux-saga/effects';
import axios from 'axios';
import createFormData from 'object-to-formdata';
import {
  EDIT_PROFILE
} from '../../actions/types';
import {
  fetchProfileSuccess,
  editProfileStart,
  setServerError
} from '../../actions/index';

export function* editProfileSaga() {
  yield takeLatest(EDIT_PROFILE,function* ({payload}) {
    try {
      yield put(editProfileStart());
      const formData = createFormData(payload);
      const {data} = yield call(axios.put,'/api/profile',formData);
      yield put(fetchProfileSuccess(data));
    }
    catch(error) {
      yield put(setServerError('save profile'));
    }
  });
}