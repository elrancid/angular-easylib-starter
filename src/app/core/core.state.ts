import {
  ActionReducerMap,
  MetaReducer,
  createFeatureSelector
} from '@ngrx/store';
import { SettingsState } from './settings/store/settings.model';
import { settingsReducer } from './settings/store/settings.reducers';
// import { initStateFromLocalStorage } from './meta-reducers/init-state-from-local-storage.reducer';


export const reducers: ActionReducerMap<AppState> = {
  // auth: authReducer,
  settings: settingsReducer,
  // router: routerReducer
};

// export const metaReducers: MetaReducer<AppState>[] = [
//   initStateFromLocalStorage
// ];

// if (!environment.production) {
//   if (!environment.test) {
//     metaReducers.unshift(debug);
//   }
// }


export interface AppState {
  // auth: AuthState;
  settings: SettingsState;
  // router: RouterReducerState<RouterStateUrl>;
}
