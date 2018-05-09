import {fromJS} from 'immutable';
import {
  FETCH_SKILLS_SUCCESS,
  ADD_CATEGORY,
  ADD_SKILL,
  REMOVE_SKILL,
  REMOVE_CATEGORY,
  SAVE_SKILLS_START,
  SAVE_SKILLS_SUCCESS,
  UPDATE_SKILL,
  RESET_SKILLS
} from '../actions/types';

const initialState = fromJS({
  list: fromJS([]),
  initialList: fromJS([]),
  loading: false
});

const updateSkill = (state,{categoryName,skillName,number}) => {
  return state.update('list',categories => {
    return categories.update(
      categories.findIndex(category => category.get('name') === categoryName),
      category => {
        return category.update(
          'skills',
          skills => skills.update(
            skills.findIndex(skill => skill.get('name') === skillName),
            skill => skill.set('value',number)
          )
        );
      }
    );
  })
};

export default (state = initialState,{type,payload}) => {
  switch (type) {
    case RESET_SKILLS:
      return state.set('list',state.get('initialList'));
    case REMOVE_CATEGORY:
      return state.update(
        'list',
        categories => categories.filter(category => category.get('name') !== payload)
      );
    case REMOVE_SKILL:
      return state.update(
        'list',
        categories => categories.update(
          categories.findIndex(category => category.get('name') === payload.categoryName),
          category => category.update(
            'skills',
            skills => skills.filter(skill => skill.get('name') !== payload.skillName)
          )
        )
      );
    case UPDATE_SKILL:
      return updateSkill(state,payload);
    case SAVE_SKILLS_START:
      return state.set('loading',true);
    case SAVE_SKILLS_SUCCESS:
      return state.set('loading',false);
    case FETCH_SKILLS_SUCCESS:
      return state.merge({
        list: fromJS(payload),
        initialList: fromJS(payload)
      });
    case ADD_CATEGORY:
      return state.update(
        'list',
        categories => categories.push(fromJS({
          name: payload,
          skills: fromJS([])
        }))
      );
    case ADD_SKILL:
      return state.update(
        'list',
        categories => categories.update(
          categories.findIndex(category => category.get('name') === payload.categoryName),
          category => category.update('skills', skills => skills.push(fromJS({
            name: payload.skillName,
            value: 0
          })))
        )
      );
    default:
      return state;
  }
}