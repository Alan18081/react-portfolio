import {call,put,take} from 'redux-saga/effects';
import axios from 'axios';
import {
  FETCH_SKILLS
} from '../../actions/types';
import {
  fetchSkillsSuccess,
  setServerError
} from '../../actions/index';

export function* fetchSkillsSaga() {
  try {
    yield take(FETCH_SKILLS);
    const {data} = yield call(axios.get,'/api/skills');
    yield put(fetchSkillsSuccess(data));
  }
  catch(error) {
    yield put(setServerError('load this page'));
  }
}