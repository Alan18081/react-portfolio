import {
  ADD_CATEGORY,
  ADD_SKILL,
  FETCH_SKILLS,
  FETCH_SKILLS_SUCCESS,
  SAVE_SKILLS,
  SAVE_SKILLS_START,
  SAVE_SKILLS_SUCCESS,
  UPDATE_SKILL,
  REMOVE_CATEGORY,
  REMOVE_SKILL,
  RESET_SKILLS
} from './types';

export const resetSkills = () => ({
  type: RESET_SKILLS
});

export const removeCategory = (name) => ({
  type: REMOVE_CATEGORY,
  payload: name
});

export const removeSkill = (categoryName,skillName) => ({
  type: REMOVE_SKILL,
  payload: {
    categoryName,
    skillName
  }
});

export const updateSkill = (categoryName,skillName,number) => ({
  type: UPDATE_SKILL,
  payload: {
    categoryName,
    skillName,
    number
  }
});

export const saveSkills = () => ({
  type: SAVE_SKILLS
});

export const saveSkillsStart = () => ({
  type: SAVE_SKILLS_START
});

export const saveSkillsSuccess = () => ({
  type: SAVE_SKILLS_SUCCESS
});

export const fetchSkills = () => ({
  type: FETCH_SKILLS
});

export const fetchSkillsSuccess = (skills) => ({
  type: FETCH_SKILLS_SUCCESS,
  payload: skills
});

export const addSkill = (categoryName,skillName) => ({
  type: ADD_SKILL,
  payload: {
    categoryName,
    skillName
  }
});

export const addCategory = (category) => ({
  type: ADD_CATEGORY,
  payload: category
});