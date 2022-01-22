import { NgModule } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../store/core.state';
import { Language } from '../../store/settings/settings.model';
import { getSettingsLanguage } from '../../store/settings/settings.selectors';
import * as moment from 'moment';

// TRANSLATE
import {
  HttpClientModule,
  HttpClient,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { Injector, APP_INITIALIZER } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
// import { LOCATION_INITIALIZED } from '@angular/common';
// import { promise } from 'protractor';

const logs: boolean = false;

// AoT requires an exported function for factories
export function httpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  // return new TranslateHttpLoader(http); // load translations from "/assets/i18n/[lang].json"
  // return new TranslateHttpLoader(http, `${environment.i18nPrefix}/assets/i18n/`, '.json');
  // return new TranslateHttpLoader(http, './assets/i18n/', '.json');
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function appInitializerFactory(translate: TranslateService, injector: Injector) {
  // return () => new Promise<any>((resolve: any) => {
  //   const locationInitialized = injector.get(LOCATION_INITIALIZED, Promise.resolve(null));
  //   locationInitialized.then(() => {
  //     const langToSet = 'en-GB'
  //     translate.setDefaultLang('en-US');
  //     translate.use(langToSet).subscribe(() => {
  //       console.info(`Successfully initialized '${langToSet}' language.'`);
  //     }, err => {
  //       console.error(`Problem with '${langToSet}' language initialization.'`);
  //     }, () => {
  //       resolve(null);
  //     });
  //   });
  // });
  // return async () => {
  //   await injector.get(LOCATION_INITIALIZED, Promise.resolve(null));
  //   translate.setDefaultLang('en-US');
  //   try {
  //     await translate.use('client').toPromise();
  //   } catch (err) { }
  // }
  return async () => {
    // await injector.get(LOCATION_INITIALIZED, Promise.resolve(null));
    // translate.setDefaultLang('en-US');
    if (logs) console.log('********* AppTranslateModule translate.setDefaultLang en');
    translate.setDefaultLang('en');

    // const language$: Observable<Language> = this.store.pipe(select(getSettingsLanguage));
    // const language = await this.store.pipe(select(getSettingsLanguage), take(1)).toPromise();
    // console.log('********* AppTranslateModule store language:', language);

    // return translate.use('en').toPromise();
    if (useLang) {
      if (logs) console.log('********* AppTranslateModule translate.use', useLang);
      if (logs) console.log('********* AppTranslateModule moment.locale:', moment.locale());
      moment.locale(useLang);
      if (logs) console.log('********* AppTranslateModule moment.locale:', moment.locale());
      if (logs) console.log('********* AppTranslateModule translate.use', useLang);
      return translate.use(useLang).toPromise();
    }
    else {
      return Promise.resolve();
    }
  };
}
var useLang: string;

@NgModule({
  declarations: [
  ],
  imports: [
    // TRANSLATE
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [
    { // To start app after translation is ready
      provide: APP_INITIALIZER,
      useFactory: appInitializerFactory,
      deps: [TranslateService, Injector],
      multi: true
    }
  ],
  // providers: [TranslatePipe],
  exports: [
    //   TranslateModule
  ],
})
export class AppTranslateModule {
  constructor(private store: Store<AppState>, private translate: TranslateService) {
    // console.log('********* AppTranslateModule constructor');
    const language$: Observable<Language> = this.store.pipe(select(getSettingsLanguage));
    const subscription = language$.subscribe((language: Language) => {
      if (logs) console.log('********* AppTranslateModule constructor language:', language);
      useLang = language;
      setTimeout(() => {
        subscription.unsubscribe();
      });
    });
  }
}
