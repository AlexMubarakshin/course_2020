import { AnyAction } from 'redux';

import { ImagesStoreState, IMAGES_ACTIONS } from '.';

const imagesReducerInitialState: ImagesStoreState = {
  images: [],
  page: 0,
  isFetching: false,
  isMoreFetching: false,
};

function imagesReducer(state: ImagesStoreState = imagesReducerInitialState, action: AnyAction): ImagesStoreState {
  switch (action.type) {
    case IMAGES_ACTIONS.LOAD_IMAGES_REQUEST:
      return ({
        ...state,
        isFetching: true,
      });

    case IMAGES_ACTIONS.LOAD_IMAGES_SUCCESS:
      return ({
        ...state,
        images: action.payload,
        isFetching: false,
      });

    case IMAGES_ACTIONS.LOAD_IMAGES_FAILURE:
      return ({
        ...state,
        isFetching: false,
      });

    case IMAGES_ACTIONS.LOAD_MORE_IMAGES_REQUEST:
      return ({
        ...state,
        isMoreFetching: true,
      });

    case IMAGES_ACTIONS.LOAD_MORE_IMAGES_SUCCESS:
      return ({
        ...state,
        page: state.page + 1,
        images: [...state.images, ...action.payload],
        isMoreFetching: false,
      });


    case IMAGES_ACTIONS.LOAD_MORE_IMAGES_FAILURE:
      return ({
        ...state,
        isMoreFetching: false,
      });

    default:
      return state;

  }
}

export default imagesReducer;
