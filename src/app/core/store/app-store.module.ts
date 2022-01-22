import { NgModule } from '@angular/core';

// NGRX
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {
  StoreRouterConnectingModule,
  RouterStateSerializer
} from '@ngrx/router-store';
import {
  AppState,
  reducers,
  metaReducers,
  // selectRouterState
} from './core.state';
import { SettingsEffects } from './settings/settings.effects';
import { environment } from 'src/environments/environment';
// import { reducers, metaReducers } from './reducers';


@NgModule({
  declarations: [
  ],
  imports: [
    // NGRX
    // StoreModule.forRoot(reducers),
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule.forRoot({stateKey: 'router'}),
    // StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([
      // AuthEffects,
      SettingsEffects,
      // GoogleAnalyticsEffects
    ]),
    // !environment.production ? StoreDevtoolsModule.instrument() : [],
    environment.production ? [] : StoreDevtoolsModule.instrument({ name: 'Angular NgRx Material Starter' }),
  ],
  exports: [
  ]
})
export class AppStoreModule { }
