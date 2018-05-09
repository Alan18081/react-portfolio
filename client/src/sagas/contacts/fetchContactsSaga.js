import {take,call,put} from 'redux-saga/effects';
import axios from 'axios';
import {
  FETCH_CONTACTS
} from '../../actions/types';
import {
  fetchContactsSuccess,
  setServerError
} from '../../actions';

export function* fetchContactsSaga() {
  try {
    yield take(FETCH_CONTACTS);
    const {data} = yield call(axios.get,'/api/contacts');
    console.log(data);
    yield put(fetchContactsSuccess(data));
  }
  catch (error) {
    yield put(setServerError('load this page'));
  }
}