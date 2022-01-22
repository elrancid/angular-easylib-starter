import { ActionReducer, INIT, UPDATE } from '@ngrx/store';

import { StorageService } from '@easylib/util';
import { AppState } from '../store/core.state';

/**
 * @deprecated
 * @param reducer 
 * @returns 
 */
export function initStateFromLocalStorage(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return (state, action) => {
    const newState = reducer(state, action);
    // console.log('meta-reducers/initStateFromLocalStorage');
    if ([INIT.toString(), UPDATE.toString()].includes(action.type)) {
      console.log('meta-reducers/initStateFromLocalStorage loadInitialState...');
      // return { ...newState, ...StorageService.loadInitialState('settings') };
      return { ...newState };
    }
    return newState;
  };
}
