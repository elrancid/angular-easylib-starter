import { Injectable } from '@angular/core';
import { Router, CanActivate, CanLoad } from '@angular/router';
import { Loggable } from '@easylib/log';
import { Observable } from 'rxjs';
// import { AuthService } from './auth.service';
import { AuthService } from '../feathers/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService extends Loggable implements CanActivate, CanLoad {

  // public logs = true;

  constructor(public auth: AuthService, public router: Router) {
    super();
    this.log('AuthService.constructor()');
  }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    this.log('AuthGuardService.canActivate()');
    return this.can();
  }

  canLoad(): Observable<boolean> | Promise<boolean> | boolean {
    this.log('AuthGuardService.canLoad()');
    return this.can();
  }

  can(): Observable<boolean> | Promise<boolean> | boolean {
    // if (!this.auth.isAuthenticated()) {
    //   this.log('AuthGuardService.can() not authenticated, navigate to login');
    //   this.router.navigate(['login']);
    //   return false;
    // }
    // return true;

    /* Try to auth with the server. If authed resolve to true, else resolve to false */
    this.log('AuthGuardService.can() call auth service login');
    return this.auth.isLogged()
    .then((result) => {
      this.log('AuthGuardService.can() result:', result);
      return true;
    })
    .catch((error) => {
      this.log('AuthGuardService.can() error:', error);
      this.log('AuthGuardService.can() navigate to /login');
      this.router.navigate(['/login']);
      return false;
    });
  }
}