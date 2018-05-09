import {call,takeLatest,put} from 'redux-saga/effects';
import axios from 'axios';
import {
  ADD_IMAGE
} from '../../actions/types';
import createFormData from 'object-to-formdata';
import {
  setServerError,
  editProjectSuccess,
  imageStart
} from '../../actions/index';

export function* addImageSaga() {
  yield takeLatest(ADD_IMAGE,function* ({payload: {id,image}}) {
    try {
      yield put(imageStart());
      const formData = createFormData({image});
      const {data} = yield call(axios.post,`/api/projects/${id}/images`,formData);
      yield put(editProjectSuccess(data));
    }
    catch (error) {
      yield put(setServerError('add image to the project'));
    }
  })
}