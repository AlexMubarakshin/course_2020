import { AnyAction } from 'redux';

import { ImageStoreState, IMAGE_ACTIONS } from '.';

const initialState: ImageStoreState = {
  image: undefined,
  isFetching: false,
};

function imageReducer(state: ImageStoreState = initialState, action: AnyAction): ImageStoreState {
  switch (action.type) {
    case IMAGE_ACTIONS.LOAD_IMAGE_REQUEST:
      return ({
        ...state,
        isFetching: true,
      });

    case IMAGE_ACTIONS.LOAD_IMAGE_SUCCESS:
      return ({
        ...state,
        isFetching: false,
        image: action.payload,
      });

    case IMAGE_ACTIONS.LOAD_IMAGE_FAILURE:
      return ({
        ...state,
        isFetching: false,
      });

    default:
      return state;
  }
}

export default imageReducer;
