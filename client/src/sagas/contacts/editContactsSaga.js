import {takeLatest,call,put} from 'redux-saga/effects';
import axios from 'axios';
import {
  EDIT_CONTACTS
} from '../../actions/types';
import {
  fetchContactsSuccess,
  editContactsStart,
  setServerError
} from '../../actions';

export function* editContactsSaga() {
  yield takeLatest(EDIT_CONTACTS,function* ({payload}) {
    try {
      yield put(editContactsStart());
      const {data} = yield call(axios.post,'/api/contacts',payload);
      yield put(fetchContactsSuccess(data));
    }
    catch (error) {
      yield put(setServerError('edit contacts'));
    }
  })
}