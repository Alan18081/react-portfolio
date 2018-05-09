import {call,takeLatest,put} from 'redux-saga/effects';
import axios from 'axios';
import {
  REMOVE_IMAGE
} from '../../actions/types';
import {
  setServerError,
  editProjectSuccess,
  imageStart
} from '../../actions/index';

export function* removeImageSaga() {
  yield takeLatest(REMOVE_IMAGE,function* ({payload: {id,name}}) {
    try {
      yield put(imageStart());
      const {data} = yield call(axios.delete,`/api/projects/${id}/${name}`);
      yield put(editProjectSuccess(data));
    }
    catch (error) {
      yield put(setServerError('remove image'));
    }
  })
}