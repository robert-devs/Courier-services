import { createReducer, on } from '@ngrx/store';
import { Iuser } from '../Interfaces/interfaces';

import * as AuthActions from './auth.actions';

export interface AuthState {
  user: Iuser | null;
  loading: boolean;
  error: string;
}

const initialState: AuthState = {
  user: null,
  loading: false,
  error: '',
};

export const authReducer = createReducer<AuthState>(
  initialState,
  on(AuthActions.loginUser, (state): AuthState => {
    return {
      ...state,
      loading: true,
      user: null,
    };
  }),
  on(AuthActions.loginUserSuccess, (state, action): AuthState => {
    return {
      ...state,
      loading: false,
      user: action.user,
    };
  }),
  on(AuthActions.loginUserFailure, (state, action): AuthState => {
    return {
      ...state,
      loading: false,
      error: action.error,
    };
  })
);

////register reducer
export const regiState = createReducer<AuthState>(
  initialState,
  on(AuthActions.registerUser, (state): AuthState => {
    return {
      ...state,
      loading: true,
      user: null,
    };
  }),
  on(AuthActions.registerUserSuccess, (state, action): AuthState => {
    return {
      ...state,
      loading: false,
      user: action.user,
    };
  }),
  on(AuthActions.registerUserFailure, (state, action): AuthState => {
    return {
      ...state,
      loading: false,
      error: action.error,
    };
  })
);
