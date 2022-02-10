import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AuthState } from './auth.model';
export const getAuthState = createFeatureSelector<AuthState>('auth');

export const getAuth = createSelector(
  getAuthState,
  (state: AuthState) => state
);

export const getAuthUser = createSelector(
  getAuth,
  (state: AuthState) => state.user
);

export const getAuthToken = createSelector(
  getAuth,
  (state: AuthState) => state.accessToken
);

export const getAuthPayload = createSelector(
  getAuth,
  (state: AuthState) => state.authentication!.payload
);

export const getAuthReady = createSelector(
  getAuth,
  (state: AuthState) => state.ready
);

export const getAuthSessionId = createSelector(
  getAuth,
  (state: AuthState) => state.session_id
);
