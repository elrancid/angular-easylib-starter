import { createAction, props } from '@ngrx/store';

import { CompositionsState } from './compositions.model';

export const noActionCompositions = createAction('[Compositions] No action');

export const actionCompositionsChange = createAction(
  '[Compositions] Change Compositions',
  props<{ compositions: CompositionsState }>()
);

// export const actionCompositionsReadyChange = createAction(
//   '[Compositions] Change Compositions Ready',
//   props<Pick<CompositionsState, 'ready'>>()
// );

// export const actionCompositionsChangeCompositionsentication = createAction(
//   '[Compositions] Change Language',
//   props<{ compositionsetication: CompositionsenticationState }>()
// );

// export const actionCompositionsChangeUser = createAction(
//   '[Compositions] Change Theme mode',
//   props<{ user: UserState }>()
// );

// export const actionCompositionsChangeAccessToken = createAction(
//   '[Compositions] Change Theme size',
//   props<{ accessToken: string }>()
// );
