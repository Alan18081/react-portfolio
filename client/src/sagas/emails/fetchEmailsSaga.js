import {take,call,put} from 'redux-saga/effects';
import axios from 'axios';
import {
  FETCH_EMAILS
} from '../../actions/types';
import {
  fetchEmailsSuccess,
  setServerError
} from '../../actions';

export function* fetchEmailsSaga() {
  try {
    yield take(FETCH_EMAILS);
    const {data} = yield call(axios.get,'/api/emails');
    yield put(fetchEmailsSuccess(data));
  }
  catch(error) {
    yield put(setServerError('load this page'));
  }
}