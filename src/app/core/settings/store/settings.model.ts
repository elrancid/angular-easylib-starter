export type Language = 'en' | 'it';

export type ThemeMode = 'light' | 'dark' | 'auto';
export type ThemeSize = 's' | 'm';

export interface ThemeState {
  mode: ThemeMode;
  size: ThemeSize;
}

export interface SettingsState {
  language: Language;
  theme: ThemeState;
  // theme: string;
  // autoNightMode: boolean;
  // nightTheme: string;
  // stickyHeader: boolean;
  // pageAnimations: boolean;
  // pageAnimationsDisabled: boolean;
  // elementsAnimations: boolean;
  // hour: number;
}
