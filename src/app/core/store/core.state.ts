import {
  ActionReducerMap,
  MetaReducer,
  createFeatureSelector
} from '@ngrx/store';
import { environment } from 'src/environments/environment';

// import { initStateFromLocalStorage } from './meta-reducers/init-state-from-local-storage.reducer';
// import { debug } from './meta-reducers/debug.reducer';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { RouterStateUrl } from '../router/router.state';
import { storeFreeze } from 'ngrx-store-freeze';

import { AuthState } from './auth-feathers/auth.model';
import { authReducer } from './auth-feathers/auth.reducers';
import { SettingsState } from './settings/settings.model';
import { settingsReducer } from './settings/settings.reducers';
import { EventsState } from './events/events.model';
import { eventsReducer } from './events/events.reducers';
// import { UsersState } from './users/users.model';
// import { usersReducer } from './users/users.reducers';
import { GroupsState } from './groups/groups.model';
import { groupsReducer } from './groups/groups.reducers';
import { CompositionsState } from './compositions/compositions.model';
import { compositionsReducer } from './compositions/compositions.reducers';
import { MixersState } from './mixers/mixers.model';
import { mixersReducer } from './mixers/mixers.reducers';
import { SessionState } from './session/session.model';
import { sessionReducer } from './session/session.reducers';

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer,
  auth: authReducer,
  settings: settingsReducer,
  events: eventsReducer,
  // users: usersReducer,
  groups: groupsReducer,
  compositions: compositionsReducer,
  mixers: mixersReducer,
  session: sessionReducer,
};

// export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [storeFreeze] : [];
export const metaReducers: MetaReducer<AppState>[] = [
  // initStateFromLocalStorage
];

if (!environment.production) {
  // if (!environment.test) {
  metaReducers.unshift(storeFreeze);
  // metaReducers.unshift(debug);
  // }
}

export interface AppState {
  router: RouterReducerState<RouterStateUrl>;
  auth: AuthState;
  settings: SettingsState;
  events: EventsState;
  // users: UsersState;
  groups: GroupsState;
  compositions: CompositionsState;
  mixers: MixersState;
  session: SessionState;
}
