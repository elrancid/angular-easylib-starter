import { createFeatureSelector, createSelector } from '@ngrx/store';

import { SettingsState } from './settings.model';
// import { getSettingsState } from '../core.state';

// export const getProfile = (state: AppState) => state.profile;

// export const getSettingsState = createFeatureSelector<
//   AppState,
//   SettingsState
// >('settings');

// export const getDisplayName = createSelector(
//   getProfile,
//   (state: ProfileState) => `$state.user.firstName ${state.user.lastName}`
// );

// export const getSettingsState = createFeatureSelector<AppState,SettingsState>('settings');
export const getSettingsState = createFeatureSelector<SettingsState>('settings');

export const getSettings = createSelector(
  getSettingsState,
  (state: SettingsState) => state
);

export const getSettingsLanguage = createSelector(
  getSettings,
  (state: SettingsState) => state.language
);

export const getSettingsThemeMode = createSelector(
  getSettings,
  (state: SettingsState) => state.theme.mode
);

export const getSettingsThemeSize = createSelector(
  getSettings,
  (state: SettingsState) => state.theme.size
);
