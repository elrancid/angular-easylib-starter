import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, OnInitEffects, ROOT_EFFECTS_INIT } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { EMPTY, Observable, of } from 'rxjs';
import { map, mergeMap, catchError, tap, withLatestFrom, filter, switchMap } from 'rxjs/operators';
import {
  noActionSettings,
  actionSettingsChange,
  actionSettingsChangeLanguage,
  actionSettingsChangeThemeMode,
  actionSettingsChangeThemeSize,
} from './settings.actions';
import { Util, StorageService } from '@easylib/util';
import { AppState } from '../core.state';
import { SettingsState } from './settings.model';
import { Loggable } from '@easylib/log';

@Injectable()
export class SettingsEffects extends Loggable implements OnInitEffects {

  public override logs = false;

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private storage: StorageService,
    private translate: TranslateService
  ) {
    super();
  }

  // rootInit = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(ROOT_EFFECTS_INIT),
  //     // map(action => ...)
  //     tap((action) => {
  //       this.log('SettingsEffects init ROOT_EFFECTS_INIT action:', action);
  //     })
  //   ), { dispatch: false }
  // );

  init$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType('[SettingsEffects] Init'),
      withLatestFrom(this.store$),
      map(([action, storeState]) => {
        this.log('SettingsEffects.init map action:', action, 'storeState:', storeState);
        // Load setting from storage
        // const storageSettings = this.storage.init('settings');
        const storageSettings = this.storage.getItem('settings');
        this.log('SettingsEffects.init storageSettings:', storageSettings);
        if (!storageSettings) {
          this.log('SettingsEffects.init storageSettings is EMPTY. set new settings:', storeState.settings);
          this.storage.setItem('settings', Util.cloneDeep(storeState.settings));
          // return actionSettingsChange(storeState.settings);
        }
        else {
          if (!Util.isEqual(storageSettings, storeState.settings)) {
            this.log('SettingsEffects.init set new data:', storageSettings);
            return actionSettingsChange(storageSettings);
          }
          else {
            this.log('SettingsEffects.init no changes to do to settings');
          }
        }
        return noActionSettings();
      })
      // catchError(() => of({ type: '[Settings] No need to change settings' }))
    );
  });

  // init = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType('[SettingsEffects] Init'),
  //     withLatestFrom(this.store$),
  //     tap(([action, storeState]) => {
  //       this.log('SettingsEffects.init tap action:', action, 'storeState:', storeState);
  //       // Load setting from storage
  //       const storageSettings = this.storage.init('settings');
  //       this.log('SettingsEffects.init storageSettings:', storageSettings);
  //       if (Util.isEqual(storageSettings, {})) {
  //         this.log('SettingsEffects.init storageSettings is EMPTY. set new settings:', storeState.settings);
  //         this.storage.setItem('settings', storeState.settings);
  //       }
  //       else {
  //         this.log('SettingsEffects.init TODO set new data:', storageSettings);
  //       }
  //     })
  //   ), { dispatch: false }
  // );

  changeSettings = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Settings] Change Settings'),
      ofType(actionSettingsChange),
      tap((action) => {
        this.log('SettingsEffects changeSettings action:', action);
        this.storage.setItem('settings', {
          language: action.language,
          theme: { ...action.theme }
        });
        // this.log('***SettingsEffects translate.use:', action.language);
        // this.translate.use(action.language);
      })
    ), { dispatch: false }
  );

  changeLanguage = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Settings] Change Language'),
      ofType(actionSettingsChangeLanguage),
      // mergeMap(() => this.moviesService.getAll()
      // .pipe(
      //   map(movies => ({ type: '[Settings] Change Language Success', payload: movies })),
      //   catchError(() => EMPTY)
      // ))
      tap((action) => {
        this.log('SettingsEffects changeLanguage action:', action);
        this.storage.setItem('settings.language', action.language);
        this.translate.use(action.language);
      })
    ), { dispatch: false }
  );

  changeThemeMode = createEffect(() =>
    this.actions$.pipe(
      ofType(actionSettingsChangeThemeMode),
      tap((action) => {
        this.log('SettingsEffects changeThemeMode action:', action);
        this.storage.setItem('settings.theme.mode', action.mode);
      })
    ), { dispatch: false }
  );

  changeThemeSize = createEffect(() =>
    this.actions$.pipe(
      ofType(actionSettingsChangeThemeSize),
      tap((action) => {
        this.log('SettingsEffects changeThemeSize action:', action);
        this.storage.setItem('settings.theme.size', action.size);
      })
    ), { dispatch: false }
  );

  // ofType(authActions.AuthActionTypes.LoadAuths),
    // switchMap(() => {
    //   return this.http.get<string>('login')
    //     .pipe(
    //       map((userName) => {
    //         return new authActions.SetAuths(userName);
    //       })
    //     )
    // })

  // @Effect()
  // loadAuths$: Observable<Action> = this.actions$.pipe(
  // );

  ngrxOnInitEffects(): Action {
    // throw new Error('Method not implemented.');
    return { type: '[SettingsEffects] Init' };
  }

}
