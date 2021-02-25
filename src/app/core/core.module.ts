import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { LoadingModule } from './loading/loading.module';

import {
  AppState,
  reducers,
  // metaReducers,
  // selectRouterState
} from './core.state';

@NgModule({
  declarations: [
    // CoreComponent
  ],
  imports: [
    LoadingModule,

    // ngrx
    StoreModule.forRoot(reducers),
    // StoreModule.forRoot(reducers, { metaReducers }),
    // StoreRouterConnectingModule.forRoot(),
    // EffectsModule.forRoot([
    //   AuthEffects,
    //   SettingsEffects,
    //   GoogleAnalyticsEffects
    // ]),
    // environment.production
    //   ? []
    //   : StoreDevtoolsModule.instrument({
    //       name: 'Angular NgRx Material Starter'
    //     }),
  ],
  exports: [
    // CoreComponent
  ]
})
export class CoreModule { }
