import { AnyAction } from 'redux';
import { AuthStoreState, AUTH_ACTIONS } from '.';

const initialState: AuthStoreState = {
  isLoggedIn: false,
  hasError: false,
};

function authReducer(state: AuthStoreState = initialState, action: AnyAction): AuthStoreState {
  switch (action.type) {
    case AUTH_ACTIONS.LOGIN_FAILURE:
      return ({
        ...state,
        isLoggedIn: false,
        hasError: true,
      });
    case AUTH_ACTIONS.LOGIN_SUCCESS:
      return ({
        ...state,
        isLoggedIn: true,
        hasError: false,
      });
    case AUTH_ACTIONS.LOGIN_REQUEST:
      return ({
        ...state,
        isLoggedIn: false,
        hasError: false,
      });
    case AUTH_ACTIONS.LOGOUT_SUCCESS:
      return initialState;

    default:
      return state;
  }
}

export default authReducer;