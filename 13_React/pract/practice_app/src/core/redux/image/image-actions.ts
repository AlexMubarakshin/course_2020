import { Dispatch } from 'redux';
import { API_URL } from '../../../config';
import { LoadImageFunc } from './types';

type IMAGE_ACTIONS_KEYS = 'LOAD_IMAGE_REQUEST' | 'LOAD_IMAGE_SUCCESS' | 'LOAD_IMAGE_FAILURE';

export const IMAGE_ACTIONS: { [key in IMAGE_ACTIONS_KEYS]: IMAGE_ACTIONS_KEYS } = {
  LOAD_IMAGE_REQUEST: 'LOAD_IMAGE_REQUEST',
  LOAD_IMAGE_SUCCESS: 'LOAD_IMAGE_SUCCESS',
  LOAD_IMAGE_FAILURE: 'LOAD_IMAGE_FAILURE',
};

export const loadImage: LoadImageFunc = (id: number) => {
  return async (dispatch: Dispatch): Promise<void> => {

    try {
      dispatch({ type: IMAGE_ACTIONS.LOAD_IMAGE_REQUEST });

      const response = await fetch(`${API_URL}/id/${id}/info`);
      const responseImage = await response.json();

      dispatch({
        type: IMAGE_ACTIONS.LOAD_IMAGE_SUCCESS,
        payload: responseImage,
      });

    } catch (err) {
      console.error(err);

      dispatch({ type: IMAGE_ACTIONS.LOAD_IMAGE_FAILURE });
    }
  };
};
