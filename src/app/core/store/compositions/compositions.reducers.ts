import { CompositionsState } from './compositions.model';
import {
  actionCompositionsChange,
} from './compositions.actions';
import { Action, createReducer, on } from '@ngrx/store';

export const initialState: CompositionsState = [];

const reducer = createReducer(
  initialState,
  on(
    actionCompositionsChange,
    (state, action) => {
      console.log('compositions.reducer - state:', state, 'action:', action);
      return { ...state, ...action };
    }
  ),
);

export function compositionsReducer(state: CompositionsState | undefined, action: Action): CompositionsState {
  return reducer(state, action);
}
