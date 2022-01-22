import { AuthState } from './auth.model';
import {
  actionAuthChange,
  actionAuthReadyChange,
} from './auth.actions';
import { Action, createReducer, on } from '@ngrx/store';

export const initialState: AuthState = {
  ready: true
};

const reducer = createReducer(
  initialState,
  on(
    actionAuthChange,
    (state, action) => {
      // console.log('auth.reducer - state:', state, 'action:', action);
      return { ready: state.ready, ...action };
    }
  ),
  on(
    actionAuthReadyChange,
    (state, action) => {
      // console.log('auth.reducer - state:', state, 'action:', action);
      return { ...state, ...action };
    }
  ),
);

export function authReducer(state: AuthState | undefined, action: Action): AuthState {
  return reducer(state, action);
}
