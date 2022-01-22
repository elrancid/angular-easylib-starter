import { Injectable } from '@angular/core';

import * as feathersRx from 'feathers-reactive';
import * as io from 'socket.io-client';

import feathers, { HookContext } from '@feathersjs/feathers';
import feathersSocketIOClient from '@feathersjs/socketio-client';
import feathersAuthClient2 from '@feathersjs/authentication-client';
import { select, Store } from '@ngrx/store';
import { AppState } from '../store/core.state';
import { getAuth, getAuthReady } from 'src/app/core/store/auth-feathers/auth.selectors';
import { actionAuthChange, actionAuthReadyChange } from 'src/app/core/store/auth-feathers/auth.actions';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { AuthenticationState, AuthState, UserState } from '../store/auth-feathers/auth.model';
import { take } from 'rxjs/operators';
import { RouterService, NavigationService } from '@easylib/core';
import { Loggable } from '@easylib/log';

type ServiceMethod = 'find' | 'get' | 'create' | 'update' | 'patch' | 'remove';

/**
 * Simple wrapper for feathers
 */
@Injectable({
  providedIn: 'root'
})
export class FeathersService extends Loggable {

  public override logs = true;

  private _feathers = feathers();                     // init socket.io
  // private _socket = io('http://localhost:3030');      // init feathers
  private _socket = io('http://api.twig.show');      // init feathers
  private feathersAuthClient = require('@feathersjs/authentication-client').default;

  private auth?: AuthState;
  private ready?: boolean;

  public error$: Subject<HookContext> = new Subject();

  constructor(
    private store: Store<AppState>,
    // private router: Router,
    private routerService: RouterService, // questo va tenuto per far andare routerService
    private navigationService: NavigationService,
  ) {
    super();
    this.log('Feathers.constructor() activate routerService logs');
    // this.routerService.logs = true;
    this.navigationService.navigationStart.subscribe((route: string) => {
      this.log('§§§§§§§§§§ Feathers. navigationStart:', route);
      this.setAuthReadyTrueWhenNavigationIsReady();
    });
    this.navigationService.navigationEnd.subscribe((route: string) => {
      this.log('§§§§§§§§§§ Feathers. navigationEnd:', route);
    });
    // const auth$: Observable<AuthState> = this.store.pipe(select(getAuth));
    this.store
    .pipe(select(getAuth))
    .subscribe((auth: AuthState) => {
      this.log('********* Feathers. auth:', auth);
      this.auth = auth;
    });
    // const auth$: Observable<AuthState> = this.store.pipe(select(getAuth));
    this.store
    .pipe(select(getAuthReady))
    .subscribe((ready: boolean) => {
      this.log('********* Feathers. ready:', ready);
      this.ready = ready;
    });

    this._feathers
    .configure(feathersSocketIOClient(this._socket))  // add socket.io plugin
    .configure(this.feathersAuthClient({              // add authentication plugin
      storage: window.localStorage
    }))
    .configure(feathersRx({                           // add feathers-reactive plugin
      idField: 'id'
    }));
    this._feathers.hooks({
      error: this.errorHook.bind(this)
    })
  }

  private errorHook(context: HookContext) {
    this.error(`FeathersService.errorHook() Error in "${context.path}" service service "${context.service}" method "${context.method}"`, context.error.stack);
    this.error$.next(context);
  }

  /**
   * expose services
   */
  public service(name: string) {
    this.log('Feathers.service() name:', name);
    return this._feathers.service(name);
  }

  public serviceFind(service: string, params?: Record<string, any>): Promise<any> {
    this.log('Twig.serviceFind() service:', service, 'params:', params);
    return this._feathers.service(service).find(params);
  }
  public serviceFindWatch(service: string, params?: Record<string, any>): Observable<any[]> {
    this.log('Twig.serviceFind() service:', service, 'params:', params);
    return this._feathers.service(service).watch().find(params);
  }
  public serviceGet(service: string, id: string | number): Promise<any> {
    this.log('Twig.serviceGet() service:', service, 'id:', id);
    return this._feathers.service(service).get(id);
  }
  public serviceGetWatch(service: string, id: string | number): Observable<any> {
    this.log('Twig.serviceGetWatch() service:', service, 'id:', id);
    return this._feathers.service(service).watch().get(id);
  }
  public serviceCreate(service: string, data: Record<string, any>): Promise<any> {
    this.log('Twig.serviceCreate() service:', service, 'data:', data);
    return this._feathers.service(service).create(data);
  }
  public serviceUpdate(service: string, id: string | number, data: Record<string, any>): Promise<any> {
    this.log('Twig.serviceUpdate() service:', service, 'id:', id, 'data:', data);
    return this._feathers.service(service).update(id, data);
  }
  public servicePatch(service: string, id: string | number, data: Record<string, any>): Promise<any> {
    this.log('Twig.servicePatch() service:', service, 'id:', id, 'data:', data);
    return this._feathers.service(service).patch(id, data);
  }
  public serviceRemove(service: string, id: string | number): Promise<any> {
    this.log('Twig.serviceRemove() service:', service, 'id:', id);
    return this._feathers.service(service).remove(id);
  }

  // expose authentication
  public authenticate(credentials?: any): Promise<any> {
    this.log('Feathers.authenticate() credentials:', credentials);
    return this._feathers.authenticate(credentials)
    .then((result: any) => {
      this.log('Feathers.authenticate() ************** result:', result);
      this.log('Feathers.authenticate() ************** current auth:', this.auth);

      this.log('Feathers.authenticate() ******* this.auth?.accessToken:', this.auth?.accessToken);
      this.log('Feathers.authenticate() ******* result.accessToken:', result.accessToken);

      if (credentials) {
        this.log('Feathers.authenticate() dispatch auth ready false...');
        this.store.dispatch(actionAuthReadyChange({ ready: false }));
        setTimeout(() => {
          this.log('Feathers.authenticate() navigate to /');
          // this.router.navigate(['/']);
          this.navigationService.navigate('/');
          this.log('Feathers.authenticate() dispatch to store result:', result);
          this.store.dispatch(actionAuthChange(result));
          // setTimeout(() => {
          //   this.log('Feathers.authenticate() dispatch auth ready true...');
          //   this.store.dispatch(actionAuthReadyChange({ ready: true }));
          // });
        });
      }
      else if (this.auth?.accessToken !== result.accessToken) {
        this.log('Feathers.authenticate() ************** current auth differ from result:', result);
        this.log('Feathers.authenticate() dispatch to store result:', result);
        this.store.dispatch(actionAuthChange(result));
      }
      return result;
    })
    .catch((error) => {
      this.log('Feathers.authenticate() error:', error);
      this.store.dispatch(actionAuthChange({}));
      throw error;
    });
  }

  private setAuthReadyTrueWhenNavigationIsReady() {
    if (!this.ready) {
      // setTimeout(() => {
        this.log('Feathers.authenticate() °°°°°°°°°°°°°°°°°° dispatch auth ready true...');
        this.store.dispatch(actionAuthReadyChange({ ready: true }));
      // }, 2000);
    }
  }

  // expose logout
  public logout() {
    this.log('Feathers.logout()');
    return this._feathers.logout()
    .then((result) => {
      this.log('Feathers.authenticate() dispatch auth ready false...');
      this.store.dispatch(actionAuthReadyChange({ ready: false }));
      setTimeout(() => {
        this.log('Feathers.logout() navigate to /login');
        // this.router.navigate(['/login']);
        this.navigationService.navigate('/login');
        this.log('Feathers.logout() dispatch to store result:', result);
        this.store.dispatch(actionAuthChange({}));
        // setTimeout(() => {
        //   this.log('Feathers.authenticate() dispatch auth ready true...');
        //   this.store.dispatch(actionAuthReadyChange({ ready: true }));
        // });
      });
      return result;
    })
    .catch((error) => {
      this.log('Feathers.logout() error:', error);
      throw error;
    });
  }
}
