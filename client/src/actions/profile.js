import {
  EDIT_PROFILE,
  FETCH_PROFILE,
  FETCH_PROFILE_SUCCESS,
  EDIT_PROFILE_START
} from './types';

export const fetchProfile = () => ({
  type: FETCH_PROFILE
});

export const fetchProfileSuccess = (profile) => ({
  type: FETCH_PROFILE_SUCCESS,
  payload: profile
});

export const editProfile = (userInfo) => ({
  type: EDIT_PROFILE,
  payload: userInfo
});

export const editProfileStart = () => ({
  type: EDIT_PROFILE_START
});