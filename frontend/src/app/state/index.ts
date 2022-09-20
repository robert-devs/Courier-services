import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.reducers';

const getAuthFeatureState = createFeatureSelector<AuthState>('auth');

export const getAuthError = createSelector(
  getAuthFeatureState,
  (state) => state.error
);
export const getAuthUser = createSelector(
  getAuthFeatureState,
  (state) => state.user
);
