import { Dispatch, AnyAction } from 'redux';
import { LoginFunc, LogoutFunc } from './types';

type AUTH_ACTIONS_KEYS = 'LOGIN_REQUEST' | 'LOGIN_SUCCESS' | 'LOGIN_FAILURE' | 'LOGOUT_SUCCESS';

export const AUTH_ACTIONS: { [key in AUTH_ACTIONS_KEYS]: AUTH_ACTIONS_KEYS } = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
};

export const login: LoginFunc = (email: string, password: string) => {
  return (disptch: Dispatch): void => {
    if (email && password) {
      disptch({ type: AUTH_ACTIONS.LOGIN_REQUEST });

      setTimeout(() => disptch({ type: AUTH_ACTIONS.LOGIN_SUCCESS }), 3000);
    } else {
      disptch({ type: AUTH_ACTIONS.LOGIN_FAILURE });
    }
  };
};

export const logout: LogoutFunc = (): AnyAction => ({ type: AUTH_ACTIONS.LOGOUT_SUCCESS });