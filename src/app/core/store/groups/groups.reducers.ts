import { GroupsState } from './groups.model';
import {
  actionGroupsChange,
} from './groups.actions';
import { Action, createReducer, on } from '@ngrx/store';

export const initialState: GroupsState = [];

const reducer = createReducer(
  initialState,
  on(
    actionGroupsChange,
    (state, action) => {
      // console.log('auth.reducer - state:', state, 'action:', action);
      return { ...state, ...action };
    }
  ),
);

export function groupsReducer(state: GroupsState | undefined, action: Action): GroupsState {
  return reducer(state, action);
}
