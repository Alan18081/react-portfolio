import {
  ADD_IMAGE,
  REMOVE_IMAGE,
  IMAGE_START
} from './types';

export const addImage = (id,image) => ({
  type: ADD_IMAGE,
  payload: {
    id,
    image
  }
});

export const removeImage = (id,name) => ({
  type: REMOVE_IMAGE,
  payload: {
    id,
    name
  }
});

export const imageStart = () => ({
  type: IMAGE_START
});