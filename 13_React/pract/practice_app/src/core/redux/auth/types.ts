import { AnyAction } from 'redux';

export type AuthStoreState = {
  isLoggedIn?: boolean;
  hasError?: boolean;
}

export type LoginFunc = (email: string, password: string) => void;
export type LogoutFunc = () => AnyAction;