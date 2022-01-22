import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subject, Subscription } from 'rxjs';
import { distinctUntilChanged, takeUntil } from 'rxjs/operators';

// import { Loggable } from '../../Loggable';
// import { FormManager } from '../../form/form-manager';
import { FormManagerComponent } from '@easylib/core';

// import { SettingsService } from 'src/app/core/settings/services/settings.service';
// import { AuthService } from 'src/app/api/auth.service';
import { AuthService } from '@easylib/core';
// import { ApiService } from 'src/app/api/api.service';
import { ApiService } from '@easylib/core';

import { AppState } from 'src/app/core/store/core.state';
import { SettingsState } from 'src/app/core/store/settings/settings.model';
import {
  actionSettingsChange,
  actionSettingsChangeLanguage,
  actionSettingsChangeThemeMode,
  actionSettingsChangeThemeSize,
} from 'src/app/core/store/settings/settings.actions';
import { getSettings } from 'src/app/core/store/settings/settings.selectors';
// import { Util } from '@easylib/util';
// import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { pages } from 'src/app/features/config';
import { ComponentTab, OnComponentTabActivate } from '@easylib/material';
// import { BrowserTabPageComponent } from 'src/app/shared/browser-tabs/broser-tab-page.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent extends FormManagerComponent implements OnInit, OnDestroy, ComponentTab, OnComponentTabActivate {

  @Input() logs = false;

  browserTabLabel = this.translate.instant(pages.settings.label);
  browserTabIcon = pages.settings.icon;

  private stop$: Subject<void> = new Subject();
  public settings$: Observable<SettingsState> = this.store.pipe(select(getSettings));
  public settings: SettingsState;

  protected formStructure = {
    // darkTheme: {
    //   type: 'boolean',
    //   required: false,
    // },
    language: {
      type: 'string',
      required: true,
    },
    themeMode: {
      type: 'string',
      required: true,
    },
    themeSize: {
      type: 'string',
      required: true,
    },
  };

  public languages = [
    {
      value: 'it',
      // label: 'Italiano'
      label: this.translate.instant('settings.languages.it')
    },
    {
      value: 'en',
      // label: 'Inglese'
      label: this.translate.instant('settings.languages.en')
    },
  ];

  public modeItems = [
    {
      value: 'light',
      // label: 'Light',
      label: this.translate.instant('settings.modes.light')
    },
    {
      value: 'dark',
      // label: 'Dark',
      label: this.translate.instant('settings.modes.dark')
    },
    {
      value: 'auto',
      // label: 'Auto',
      label: this.translate.instant('settings.modes.auto')
    },
  ];

  public sizeItems = [
    {
      value: 'xs',
      // label: 'Small',
      label: this.translate.instant('settings.sizes.xs')
    },
    {
      value: 's',
      // label: 'Small',
      label: this.translate.instant('settings.sizes.s')
    },
    {
      value: 'm',
      // label: 'Medium',
      label: this.translate.instant('settings.sizes.m')
    },
    {
      value: 'l',
      // label: 'Medium',
      label: this.translate.instant('settings.sizes.l')
    },
    {
      value: 'xl',
      // label: 'Medium',
      label: this.translate.instant('settings.sizes.xl')
    },
  ];

  constructor(
    private store: Store<AppState>,
    // private settings: SettingsService,
    private auth: AuthService,
    private api: ApiService,
    private translate: TranslateService,
  ) {
    super();
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.log('SettingsComponent.ngOnInit() form:', this.form);
    // const settings = this.settings.getSettings();
    // this.log('SettingsComponent.ngOnInit() settings:', settings);
    // // set data to form manager
    // this.setFormDataValues(settings);
    // this.settings$ = this.store.pipe(select(getSettings));
    this.settings$
    .pipe(
      takeUntil(this.stop$),
      // distinctUntilChanged(),
    )
    .subscribe((settings: SettingsState) => {
      this.log('SettingsComponent.ngOnInit() settings$ valueChanges [' + (typeof settings) + ']:', settings);
      this.settings = settings;
      // this.log('SettingsComponent setFormDataValues:', {
      //   language: settings.language,
      //   themeMode: settings.theme.mode,
      //   themeSize: settings.theme.size,
      // });
      this.setFormDataValues({
        language: settings.language,
        themeMode: settings.theme.mode,
        themeSize: settings.theme.size,
      });
    });

    // this.form.valueChanges
    // .pipe(
    //   takeUntil(this.stop$),
    //   // distinctUntilChanged(),
    // )
    // .subscribe((value) => {
    //   this.log('SettingsComponent.ngOnInit() form.valueChanges:', value);
    // });
  }

  ngOnDestroy(): void {
    this.log('SettingsComponent.ngOnDestroy()');
    super.ngOnDestroy();
    // this.darkTheme$.unsubscribe();
    this.stop$.next();
    this.stop$.complete();
  }

  onComponentTabActivate(): void {
    this.log('SettingsComponent.onComponentTabActivate() °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°');
  }

  // toggleDarkTheme() {
  //   this.darkTheme = !this.darkTheme;
  //   this.settings.setDarkTheme(this.darkTheme);
  // }

  logout(): void {
    this.auth.callApiLogout();
  }

  resetCache(): void {
    this.api.resetCache();
  }

  protected onFormDataChanged(formData: any, oldFormData: any): void {
    this.log('SettingsComponent.onFormDataChanged() formData:', formData, 'oldFormData:', oldFormData);
    // this.log('SettingsComponent.onFormDataChanged() settings:', this.settings);
    if (formData.language !== this.settings.language &&
      formData.themeMode !== this.settings.theme.mode &&
      formData.themeSize !== this.settings.theme.size
    ) {
      // Change all settings
      // this.log('SettingsComponent.onFormDataChanged() store.dispatch actionSettingsChange. formData:', formData);
      this.store.dispatch(actionSettingsChange({
        language: formData.language,
        theme: {
          mode: formData.themeMode,
          size: formData.themeSize,
        }
      }));
    }
    else {
      if (formData.language !== this.settings.language) {
        // Change language
        // this.log('SettingsComponent.onFormDataChanged() store.dispatch actionSettingsChangeLanguage. language:', formData.language);
        this.store.dispatch(actionSettingsChangeLanguage({ language: formData.language }));
      }
      if (formData.themeMode !== this.settings.theme.mode) {
        // Change theme mode
        // this.log('SettingsComponent.onFormDataChanged() store.dispatch actionSettingsChangeThemeMode. themeMode:', formData.themeMode);
        this.store.dispatch(actionSettingsChangeThemeMode({ mode: formData.themeMode }));
      }
      if (formData.themeSize !== this.settings.theme.size) {
        // Change theme size
        // this.log('SettingsComponent.onFormDataChanged() store.dispatch actionSettingsChangeThemeSize. themeSize:', formData.themeSize);
        this.store.dispatch(actionSettingsChangeThemeSize({ size: formData.themeSize }));
      }
    }
  }

}
