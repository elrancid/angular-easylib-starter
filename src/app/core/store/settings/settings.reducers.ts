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

/*
Property 'settings' does not exist on type '
(
  { settings: SettingsState; } & TypedAction<"[Settings] Change Settings"> & { type: "[Settings] Change Settings"; }
) | (
  { language: Language; } & TypedAction<...> & { ...; }
)'.

Property 'settings' does not exist on type '
{ language: Language; } & TypedAction<"[Settings] Change Language"> & { type: "[Settings] Change Language"; }
'
*/

const reducer = createReducer(
  initialState,
  on(
    actionSettingsChange,
    actionSettingsChangeLanguage,
    (state, action) => {
      return { ...state, ...action };
    }
  ),
  on(
    actionSettingsChangeThemeMode,
    actionSettingsChangeThemeSize,
    (state, action) => {
      // console.log('reducer actionSettingsChangeThemeMode state:', state, 'state.theme:', state.theme, 'action:', action);
      state = { ...state , theme: { ...state.theme, ...action} };
      return state;
    }
  ),
);

export function settingsReducer(state: SettingsState | undefined, action: Action): SettingsState {
  return reducer(state, action);
}
