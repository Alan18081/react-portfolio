import {
  CREATE_PROJECT,
  CREATE_PROJECT_START,
  CREATE_PROJECT_SUCCESS,
  EDIT_PROJECT,
  EDIT_PROJECT_START,
  EDIT_PROJECT_SUCCESS,
  FETCH_PROJECTS,
  FETCH_PROJECTS_SUCCESS,
  SET_ACTIVE_PROJECT,
  RESET_DONE,
  REMOVE_PROJECT,
  REMOVE_PROJECT_START,
  REMOVE_PROJECT_SUCCESS
} from '../actions/types';

export const resetDone = () => ({
  type: RESET_DONE
});

export const setActiveProject = id => ({
  type: SET_ACTIVE_PROJECT,
  payload: id
});

export const fetchProjects = () => ({
  type: FETCH_PROJECTS
});

export const fetchProjectsSuccess = (projects) => ({
  type: FETCH_PROJECTS_SUCCESS,
  payload: projects
});

export const createProject = (project) => ({
  type: CREATE_PROJECT,
  payload: project
});

export const createProjectStart = () => ({
  type: CREATE_PROJECT_START
});

export const createProjectSuccess = (project) => ({
  type: CREATE_PROJECT_SUCCESS,
  payload: project
});

export const editProject = (project) => ({
  type: EDIT_PROJECT,
  payload: project
});

export const editProjectStart = () => ({
  type: EDIT_PROJECT_START
});

export const editProjectSuccess = (project) => ({
  type: EDIT_PROJECT_SUCCESS,
  payload: project
});

export const removeProject = (id) => ({
  type: REMOVE_PROJECT,
  payload: id
});

export const removeProjectStart = () => ({
  type: REMOVE_PROJECT_START
});

export const removeProjectSuccess = (id) => ({
  type: REMOVE_PROJECT_SUCCESS,
  payload: id
});