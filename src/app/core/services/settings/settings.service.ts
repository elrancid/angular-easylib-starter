import { Injectable } from '@angular/core';
import { Subject, Observable, of, from } from 'rxjs';

// import { Loggable } from '../../Loggable';
import { Loggable } from '@easylib/log';
// import { StorageService } from '../../storage/storage.service';
import { StorageService } from '@easylib/util';

@Injectable({
  providedIn: 'root'
})
export class SettingsService extends Loggable {

  public logs = false;

  // Default settings values
  private settings = {
    darkTheme: false,
    themeSize: 's',
  };
  // private darkTheme: boolean;
  // private _darkTheme = false;
  private darkTheme: Subject<boolean> = new Subject<boolean>();
  private darkTheme$: Observable<boolean> = this.darkTheme.asObservable();

  // private _themeSize = 's';
  private themeSize: Subject<string> = new Subject<string>();
  private themeSize$: Observable<string> = this.themeSize.asObservable();

  constructor(
    private storage: StorageService,
  ) {
    super();
    this.log('SettingsService.constructor()');
    // Get settings from storage
    let settings = this.storage.getItem('settings');
    this.log('SettingsService.constructor() from storage settings:', settings);
    // Check undefined values
    if (settings === undefined) {
      settings = this.settings;
    }
    if (settings.darkTheme === undefined) {
      settings.darkTheme = this.settings.darkTheme;
    }
    if (settings.themeSize === undefined) {
      settings.themeSize = this.settings.themeSize;
    }
    // Update storage settings
    this.settings = settings;
    this.log('SettingsService.constructor() settings:', settings);
    this.storage.setItem('settings', this.settings);
    // Notify values
    this.darkTheme.next(this.settings.darkTheme);
    this.themeSize.next(this.settings.themeSize);
  }

  getSettings(): object {
    return this.settings;
  }

  setDarkTheme(darkTheme: boolean): void {
    if ((darkTheme === true || darkTheme === false) && darkTheme !== this.settings.darkTheme) {
      this.log('SettingsService.setDarkTheme() darkTheme:', darkTheme);
      this.setStorageSettingValue('darkTheme', darkTheme);
      this.darkTheme.next(darkTheme);
    }
  }
  getDarkTheme(): boolean {
    return this.settings.darkTheme;
  }
  getDarkTheme$(): Observable<boolean> {
    return this.darkTheme$;
  }

  setThemeSize(themeSize: string): void {
    if ((themeSize === 's' || themeSize === 'm') && themeSize !== this.settings.themeSize) {
      this.log('SettingsService.setThemeSize() themeSize:', themeSize);
      this.setStorageSettingValue('themeSize', themeSize);
      this.themeSize.next(themeSize);
    }
  }
  getThemeSize(): string {
    return this.settings.themeSize;
  }
  getThemeSize$(): Observable<string> {
    return this.themeSize$;
  }

  setStorageSettingValue(setting: string, value: any): void {
    this.settings[setting] = value;
    this.storage.setItem('settings', this.settings);
  }
}
