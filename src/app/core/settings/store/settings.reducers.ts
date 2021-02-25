import { SettingsState } from './settings.model';
import {
  actionSettingsChange,
  actionSettingsChangeLanguage,
  actionSettingsChangeThemeMode,
  actionSettingsChangeThemeSize,
} from './settings.actions';
import { Action, createReducer, on } from '@ngrx/store';

export const initialState: SettingsState = {
  language: 'it',
  theme: {
    mode: 'auto',
    size: 's',
  }
};

const reducer = createReducer(
  initialState,
  on(
    actionSettingsChange,
    actionSettingsChangeLanguage,
    // actionSettingsChangeThemeMode,
    // actionSettingsChangeThemeSize,
    (state, action) => ({ ...state, ...action })
  ),
  // on(actionSettingsChangeLanguage, (state, action) => ({ user: action.user, error: false })),
  on(actionSettingsChangeThemeMode, (state, action) => {
    state.theme.mode = action.mode;
    return state;
  }),
  // on(actionSettingsChangeThemeMode, (state, action) => ({ user: {}, error: true })),
  on(actionSettingsChangeThemeSize, (state, action) => {
    state.theme.size = action.size;
    return state;
  }),
);

export function settingsReducer(state: SettingsState | undefined, action: Action): SettingsState {
  return reducer(state, action);
}
