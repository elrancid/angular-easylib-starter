import { FeathersService } from './feathers.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from '@easylib/core';
import { Loggable } from '@easylib/log';

/**
 * Abstraction layer for auth. Nice to have when things get more complicated.
 */
@Injectable({
  providedIn: 'root'
})
export class AuthService extends Loggable {

  // public logs = true;

  constructor(
    private feathers: FeathersService,
    // private router: Router,
    // private navigation: NavigationService,
  ) {
    super();
  }

  public isLogged(): Promise<any> {
    return this.feathers.authenticate();
  }

  public login(credentials?: any): Promise<any> {
    this.log('AuthService.login() credentials:', credentials);
    // if (credentials) {
    //   credentials = {
    //     ...credentials,
    //     strategy: 'local',
    //   };
    // }
    return this.feathers.authenticate(credentials);
  }

  public register(credentials?: any): Promise<any> {
    this.log('AuthService.login() credentials:', credentials);
    return this.feathers.serviceCreate('user', credentials);
  }

  public logout() {
    this.log('AuthService.logout()');
    this.feathers.logout();
    // this.log('AuthService.logout() navigate to /login');
    // this.router.navigate(['/login']);
  }
}
