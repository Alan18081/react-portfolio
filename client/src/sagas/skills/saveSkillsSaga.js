import {call,put,takeLatest,select} from 'redux-saga/effects';
import axios from 'axios';
import {
  SAVE_SKILLS
} from '../../actions/types';
import {
  saveSkillsStart,
  saveSkillsSuccess,
  setServerError
} from '../../actions';

export function* saveSkillsSaga() {
  yield takeLatest(SAVE_SKILLS,function* () {
    try {
      yield put(saveSkillsStart());
      const skills = yield select(({skills}) => skills.get('list'));
      yield call(axios.post,'/api/skills',skills);
      yield put(saveSkillsSuccess());
    }
    catch(error) {
      yield put(setServerError('save skills'));
    }
  });
}