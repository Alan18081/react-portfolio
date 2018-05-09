import {
  FETCH_TECHS,
  FETCH_TECHS_SUCCESS,
  ADD_TECH,
  ADD_TECH_START,
  ADD_TECH_SUCCESS,
  REMOVE_TECH,
  REMOVE_TECH_SUCCESS
} from './types';

export const fetchTechs = () => ({
  type: FETCH_TECHS
});

export const fetchTechsSuccess = (techs) => ({
  type: FETCH_TECHS_SUCCESS,
  payload: techs
});

export const addTech = (tech) => ({
  type: ADD_TECH,
  payload: tech
});

export const addTechStart = () => ({
  type: ADD_TECH_START
});

export const addTechSuccess = (tech) => ({
  type: ADD_TECH_SUCCESS,
  payload: tech
});

export const removeTech = (id) => ({
  type: REMOVE_TECH,
  payload: id
});

export const removeTechSuccess = (id) => ({
  type: REMOVE_TECH_SUCCESS,
  payload: id
});