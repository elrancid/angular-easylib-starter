import { createFeatureSelector, createSelector } from '@ngrx/store';

import { SessionState } from './session.model';
export const getSessionState = createFeatureSelector<SessionState>('session');

export const getSession = createSelector(
  getSessionState,
  (state: SessionState) => state
);

// export const getSession = createSelector(
//   getSessionState,
//   (state: { session: SessionState }) => state.session
// );

// export const getAuthUser = createSelector(
//   getAuth,
//   (state: AuthState) => state.user
// );

// export const getAuthToken = createSelector(
//   getAuth,
//   (state: AuthState) => state.accessToken
// );

// export const getAuthPayload = createSelector(
//   getAuth,
//   (state: AuthState) => state.authentication!.payload
// );

// export const getAuthReady = createSelector(
//   getAuth,
//   (state: AuthState) => state.ready
// );
