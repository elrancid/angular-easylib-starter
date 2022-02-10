import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, OnInitEffects, ROOT_EFFECTS_INIT } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { EMPTY, Observable, of } from 'rxjs';
import { map, mergeMap, catchError, tap, withLatestFrom, filter, switchMap } from 'rxjs/operators';

import {
  ROUTER_REQUEST,
  // ROUTER_NAVIGATION,
  ROUTER_NAVIGATED,
  // ROUTER_CANCEL,
  // ROUTER_ERROR,
  RouterRequestAction,
  // RouterRequestPayload,
  SerializedRouterStateSnapshot,
  RouterNavigatedAction,
} from '@ngrx/router-store';
import { RouterService } from '../../router/router.service';
// import { ActivatedRouteSnapshot } from '@angular/router';
import { Loggable } from '@easylib/log';

@Injectable()
export class RouterEffects extends Loggable {

  public override logs = true;

  constructor(
    private actions$: Actions,
    private routerService: RouterService,
    // private store$: Store<AppState>,
    ) {
      super();
      this.log('RoutingEffects.constructor()');
      // console.log('RoutingEffects.constructor() ROUTER_REQUEST:', ROUTER_REQUEST);
      // console.log('RoutingEffects.constructor() ROUTER_NAVIGATION:', ROUTER_NAVIGATION);
      // console.log('RoutingEffects.constructor() ROUTER_NAVIGATED:', ROUTER_NAVIGATED);
      // console.log('RoutingEffects.constructor() ROUTER_CANCEL:', ROUTER_CANCEL);
      // console.log('RoutingEffects.constructor() ROUTER_ERROR:', ROUTER_ERROR);
  }

  routerRequest$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ROUTER_REQUEST),
      tap((action: RouterRequestAction) => {
        this.log('RoutingEffects ROUTER_REQUEST action:', action);
        // const payload: RouterRequestPayload = action.payload;
        // console.log('RoutingEffects ROUTER_REQUEST payload:', payload);
        // console.log('RoutingEffects ROUTER_REQUEST routerState:', payload.routerState);
        const routerState: SerializedRouterStateSnapshot = action.payload.routerState;
        // const root: ActivatedRouteSnapshot = routerState.root;
        // const url: string = routerState.url;
        // this.log('RoutingEffects ROUTER_REQUEST url:', routerState.url, 'root:', routerState.root);
        this.routerService.setCurrentRoute(routerState.url, routerState.root)
      })
    ), { dispatch: false }
  );

  // routerNavigation$: Observable<Action> = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(ROUTER_NAVIGATION),
  //     tap((action) => {
  //       console.log('RoutingEffects ROUTER_NAVIGATION action:', action);
  //     })
  //   ), { dispatch: false }
  // );

  routerNavigated$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ROUTER_NAVIGATED),
      tap((action: RouterNavigatedAction) => {
        this.log('RoutingEffects ROUTER_NAVIGATED action:', action);
        const routerState: SerializedRouterStateSnapshot = action.payload.routerState;
        this.routerService.setCurrentRoute(routerState.url, routerState.root)
      })
    ), { dispatch: false }
  );

  // routerCancel$: Observable<Action> = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(ROUTER_CANCEL),
  //     tap((action) => {
  //       console.log('RoutingEffects ROUTER_CANCEL action:', action);
  //     })
  //   ), { dispatch: false }
  // );

  // routerError$: Observable<Action> = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(ROUTER_ERROR),
  //     tap((action) => {
  //       console.log('RoutingEffects ROUTER_ERROR action:', action);
  //     })
  //   ), { dispatch: false }
  // );

}
