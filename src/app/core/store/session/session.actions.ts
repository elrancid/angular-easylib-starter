import { createAction, props } from '@ngrx/store';

import { SessionState } from './session.model';

export const noActionSession = createAction('[Session] No action');

export const actionSessionChange = createAction(
  '[Session] Change Session',
  props<SessionState>()
);

// export const actionSessionChange = createAction(
//   '[Session] Change Session',
//   props<{ session: SessionState }>()
// );

// export const actionSessionReadyChange = createAction(
//   '[Session] Change Session Ready',
//   props<Pick<SessionState, 'ready'>>()
// );

// export const actionSessionChangeSessionentication = createAction(
//   '[Session] Change Language',
//   props<{ sessionetication: SessionenticationState }>()
// );

// export const actionSessionChangeUser = createAction(
//   '[Session] Change Theme mode',
//   props<{ user: UserState }>()
// );

// export const actionSessionChangeAccessToken = createAction(
//   '[Session] Change Theme size',
//   props<{ accessToken: string }>()
// );
