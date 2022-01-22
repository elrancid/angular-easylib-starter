import { createAction, props } from '@ngrx/store';

import { EventsState } from './events.model';

export const noActionEvents = createAction('[Events] No action');

export const actionEventsChange = createAction(
  '[Events] Change Events',
  props<{ events: EventsState }>()
);

// export const actionEventsReadyChange = createAction(
//   '[Events] Change Events Ready',
//   props<Pick<EventsState, 'ready'>>()
// );

// export const actionEventsChangeEventsentication = createAction(
//   '[Events] Change Language',
//   props<{ eventsetication: EventsenticationState }>()
// );

// export const actionEventsChangeUser = createAction(
//   '[Events] Change Theme mode',
//   props<{ user: UserState }>()
// );

// export const actionEventsChangeAccessToken = createAction(
//   '[Events] Change Theme size',
//   props<{ accessToken: string }>()
// );
