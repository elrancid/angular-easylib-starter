import { createAction, props } from '@ngrx/store';

import { MixersState } from './mixers.model';

export const noActionMixers = createAction('[Mixers] No action');

export const actionMixersChange = createAction(
  '[Mixers] Change Mixers',
  props<{ mixers: MixersState }>()
);

// export const actionMixersReadyChange = createAction(
//   '[Mixers] Change Mixers Ready',
//   props<Pick<MixersState, 'ready'>>()
// );

// export const actionMixersChangeMixersentication = createAction(
//   '[Mixers] Change Language',
//   props<{ mixersetication: MixersenticationState }>()
// );

// export const actionMixersChangeUser = createAction(
//   '[Mixers] Change Theme mode',
//   props<{ user: UserState }>()
// );

// export const actionMixersChangeAccessToken = createAction(
//   '[Mixers] Change Theme size',
//   props<{ accessToken: string }>()
// );
