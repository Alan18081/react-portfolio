import {call,put,take,select} from 'redux-saga/effects';
import axios from 'axios';
import {
  FETCH_TECHS
} from  '../../actions/types';
import {
  fetchTechsSuccess,
  setServerError
} from '../../actions';

export function* fetchTechsSaga() {
  try {
    yield take(FETCH_TECHS);
    const fetched = yield select(({tech}) => tech.get('fetched'));
    if(fetched) {
      return true;
    }
    const {data} = yield call(axios.get,'/api/tech');
    yield put(fetchTechsSuccess(data));
  }
  catch(error) {
    yield put(setServerError('load this page'));
  }
}