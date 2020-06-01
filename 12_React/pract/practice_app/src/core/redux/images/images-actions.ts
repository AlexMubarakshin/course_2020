import { Dispatch } from 'redux';
import { API_URL, IMAGE_LIMIT } from '../../../config';
import { LoadImagesActionFunc, LoadMoreImagesFunc } from './types';
import { Store } from '../store';

type IMAGES_ACTIONS_KEYS = 'LOAD_IMAGES_REQUEST' | 'LOAD_IMAGES_SUCCESS' | 'LOAD_IMAGES_FAILURE' |
  'LOAD_MORE_IMAGES_REQUEST' | 'LOAD_MORE_IMAGES_FAILURE' | 'LOAD_MORE_IMAGES_SUCCESS';

export const IMAGES_ACTIONS: { [key in IMAGES_ACTIONS_KEYS]: IMAGES_ACTIONS_KEYS } = {
  LOAD_IMAGES_REQUEST: 'LOAD_IMAGES_REQUEST',
  LOAD_IMAGES_SUCCESS: 'LOAD_IMAGES_SUCCESS',
  LOAD_IMAGES_FAILURE: 'LOAD_IMAGES_FAILURE',
  LOAD_MORE_IMAGES_REQUEST: 'LOAD_MORE_IMAGES_REQUEST',
  LOAD_MORE_IMAGES_SUCCESS: 'LOAD_MORE_IMAGES_SUCCESS',
  LOAD_MORE_IMAGES_FAILURE: 'LOAD_MORE_IMAGES_FAILURE',
};

export const loadImages: LoadImagesActionFunc = () => {
  return async (dispatch: Dispatch, getState: () => Store): Promise<void> => {
    const { imagesReducer } = getState();

    if (imagesReducer.isFetching) return;

    dispatch({ type: IMAGES_ACTIONS.LOAD_IMAGES_REQUEST });

    try {
      const response = await fetch(`${API_URL}/v2/list?page=${0}&limit=${IMAGE_LIMIT}`);
      const values = await response.json();

      dispatch({ type: IMAGES_ACTIONS.LOAD_IMAGES_SUCCESS, payload: values });
    } catch (err) {
      console.error(err);

      dispatch({ type: IMAGES_ACTIONS.LOAD_IMAGES_SUCCESS });
    }
  };
};

export const loadMoreImages: LoadMoreImagesFunc = () => {
  return async (dispatch: Dispatch, getState: () => Store): Promise<any> => {
    const { imagesReducer } = getState();

    if (imagesReducer.isMoreFetching) return;

    dispatch({ type: IMAGES_ACTIONS.LOAD_MORE_IMAGES_REQUEST });

    try {
      console.log(imagesReducer.page + 1);
      const response = await fetch(`${API_URL}/v2/list?page=${imagesReducer.page + 1}&limit=${IMAGE_LIMIT}`);
      const values = await response.json();

      dispatch({ type: IMAGES_ACTIONS.LOAD_MORE_IMAGES_SUCCESS, payload: values });
    } catch (err) {
      console.error(err);

      dispatch({ type: IMAGES_ACTIONS.LOAD_MORE_IMAGES_SUCCESS });
    }
  };
};