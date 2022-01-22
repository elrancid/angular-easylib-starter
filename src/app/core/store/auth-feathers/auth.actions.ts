import { createAction, props } from '@ngrx/store';

import { AuthState, AuthenticationState, UserState } from './auth.model';

export const noActionAuth = createAction('[Auth] No action');

export const actionAuthChange = createAction(
  '[Auth] Change Auth',
  props<Omit<AuthState, 'ready'>>()
);

export const actionAuthReadyChange = createAction(
  '[Auth] Change Auth Ready',
  props<Pick<AuthState, 'ready'>>()
);

// export const actionAuthChangeAuthentication = createAction(
//   '[Auth] Change Language',
//   props<{ authetication: AuthenticationState }>()
// );

// export const actionAuthChangeUser = createAction(
//   '[Auth] Change Theme mode',
//   props<{ user: UserState }>()
// );

// export const actionAuthChangeAccessToken = createAction(
//   '[Auth] Change Theme size',
//   props<{ accessToken: string }>()
// );
