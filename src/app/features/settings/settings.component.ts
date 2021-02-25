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

import { AppState } from 'src/app/core/core.state';
import { SettingsState } from 'src/app/core/settings/store/settings.model';
import { actionSettingsChange } from 'src/app/core/settings/store/settings.actions';
import { getSettings } from 'src/app/core/settings/store/settings.selectors';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent extends FormManagerComponent implements OnInit, OnDestroy {

  @Input() logs = true;

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
    { value: 'it', label: 'Italiano' },
    { value: 'en', label: 'Inglese' },
  ];

  public modeItems = [
    {
      value: 'light',
      label: 'Light',
    },
    {
      value: 'dark',
      label: 'Dark',
    },
    {
      value: 'auto',
      label: 'Auto',
    },
  ];

  public sizeItems = [
    {
      value: 's',
      label: 'Small',
    },
    {
      value: 'm',
      label: 'Medium',
    },
  ];

  constructor(
    private store: Store<AppState>,
    // private settings: SettingsService,
    private auth: AuthService,
    private api: ApiService,
  ) {
    super();
  }

  ngOnInit(): void {
    this.log('SettingsComponent.ngOnInit()');
    super.ngOnInit();
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
      this.log('SettingsComponent settings$ valueChanges [' + (typeof settings) + ']:', settings);
      this.setFormDataValues(settings);
  });
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
    // this.darkTheme$.unsubscribe();
    this.stop$.next();
    this.stop$.complete();
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
    this.store.dispatch(actionSettingsChange({
      settings: {
        language: formData.language,
        theme: {
          mode: formData.mode,
          size: formData.size,
        }
      }
    }));
    // if (formData.darkTheme !== oldFormData.darkTheme) {
    //   this.log('SettingsComponent.onFormDataChanged() darkTheme changed to:', formData.darkTheme);
    //   this.settings.setDarkTheme(formData.darkTheme);
    // }
    // if (formData.themeSize !== oldFormData.themeSize) {
    //   this.log('SettingsComponent.onFormDataChanged() themeSize changed to:', formData.themeSize);
    //   this.settings.setThemeSize(formData.themeSize);
    // }
  }

}
