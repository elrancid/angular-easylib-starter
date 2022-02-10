import {
  ActionReducerMap,
  MetaReducer,
} from '@ngrx/store';
import { environment } from 'src/environments/environment';

import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { RouterState } from './router/router.state';
import { storeFreeze } from 'ngrx-store-freeze';

import { AuthState } from './auth/auth.model';
import { authReducer } from './auth/auth.reducers';
import { SettingsState } from '../store/settings/settings.model';
import { settingsReducer } from '../store/settings/settings.reducers';

export interface CoreState {
  router: RouterReducerState<RouterState>;
  auth: AuthState;
  settings: SettingsState;
}

export const coreReducers: ActionReducerMap<CoreState> = {
  router: routerReducer,
  auth: authReducer,
  settings: settingsReducer,
};

// export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [storeFreeze] : [];
export const coreMetaReducers: MetaReducer<CoreState>[] = [
  // initStateFromLocalStorage
];

if (!environment.production) {
  // if (!environment.test) {
  coreMetaReducers.unshift(storeFreeze);
  // metaReducers.unshift(debug);
  // }
}
