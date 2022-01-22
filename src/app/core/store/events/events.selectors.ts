import { createFeatureSelector, createSelector } from '@ngrx/store';

import { EventsState } from './events.model';
export const getEventsState = createFeatureSelector<{ events: EventsState }>('events');

export const getEvents = createSelector(
  getEventsState,
  (state: { events: EventsState }) => state.events
);

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
