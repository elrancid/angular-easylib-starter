import { EventsState } from './events.model';
import {
  actionEventsChange,
} from './events.actions';
import { Action, createReducer, on } from '@ngrx/store';

export const initialState: EventsState = [];

const reducer = createReducer(
  initialState,
  on(
    actionEventsChange,
    (state, action) => {
      console.log('events.reducer - state:', state, 'action:', action);
      return { ...state, ...action };
    }
  ),
);

export function eventsReducer(state: EventsState | undefined, action: Action): EventsState {
  return reducer(state, action);
}
