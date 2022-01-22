import { MixersState } from './mixers.model';
import {
  actionMixersChange,
} from './mixers.actions';
import { Action, createReducer, on } from '@ngrx/store';

export const initialState: MixersState = [];

const reducer = createReducer(
  initialState,
  on(
    actionMixersChange,
    (state, action) => {
      console.log('mixers.reducer - state:', state, 'action:', action);
      return { ...state, ...action };
    }
  ),
);

export function mixersReducer(state: MixersState | undefined, action: Action): MixersState {
  return reducer(state, action);
}
