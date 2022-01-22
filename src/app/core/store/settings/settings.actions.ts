import { createAction, props } from '@ngrx/store';

import { SettingsState, Language, ThemeMode, ThemeSize } from './settings.model';

export const noActionSettings = createAction('[Settings] No action');

export const actionSettingsChange = createAction(
  '[Settings] Change Settings',
  props<SettingsState>()
);

// export interface LanguageActionType {
//   language: Language;
// }

export const actionSettingsChangeLanguage = createAction(
  '[Settings] Change Language',
  props<{ language: Language }>()
);

export const actionSettingsChangeThemeMode = createAction(
  '[Settings] Change Theme mode',
  props<{ mode: ThemeMode }>()
);

export const actionSettingsChangeThemeSize = createAction(
  '[Settings] Change Theme size',
  props<{ size: ThemeSize }>()
);
