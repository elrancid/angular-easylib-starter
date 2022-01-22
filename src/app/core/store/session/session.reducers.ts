import { SessionState } from './session.model';
import {
  actionSessionChange,
} from './session.actions';
import { Action, createReducer, on } from '@ngrx/store';

export const initialState: SessionState = {};

const reducer = createReducer(
  initialState,
  on(
    actionSessionChange,
    (state, action) => {
      console.log('session.reducer - state:', state, 'action:', action);
      return { ...state, ...action };
    }
  ),
);

export function sessionReducer(state: SessionState | undefined, action: Action): SessionState {
  return reducer(state, action);
}
