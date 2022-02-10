import { NgModule, Optional, Self } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { RouterEffects } from './router/routing.effects';
import { SettingsEffects } from './settings/settings.effects';
import { Router } from '@angular/router';

export const coreEffects = [
  RouterEffects,
  SettingsEffects,
  // AuthEffects,
];

@NgModule({
  declarations: [],
  imports: [
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
  ],
  exports: [
    StoreRouterConnectingModule, // TODO: controllare se si può togliere
  ]
})
export class CoreStoreModule {
  constructor(@Self() @Optional() router: Router) {
    if (!router) {
      console.error('CoreStoreModule.constructor() NgrxRouterStoreModule must be imported in the same same level as RouterModule');
    // } else {
    //   console.log('CoreStoreModule.constructor() All good');
    }
  }
}
