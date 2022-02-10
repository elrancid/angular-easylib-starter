import { Injectable } from '@angular/core';
import { Router, CanActivate, CanLoad, NavigationExtras } from '@angular/router';
import { Loggable } from '@easylib/log';
import { Observable } from 'rxjs';
import { RouterService } from '../router/router.service';
// import { AuthService } from './auth.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService extends Loggable implements CanActivate, CanLoad {

  public override logs: boolean = true;

  private unauthenticatedRedirectUrl?: string;

  constructor(
    public auth: AuthService,
    public router: Router,
    private routerService: RouterService,
  ) {
    super();
    this.log('AuthGuardService.constructor()');
  }

  public setUnauthenticatedRedirectUrl(url: string): void {
    this.unauthenticatedRedirectUrl = url;
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
    const url = this.routerService.getUrl();
    console.log('AuthGuardService.can() from url "' + url + '"');
    // if (!this.auth.isAuthenticated()) {
    //   this.log('AuthGuardService.can() not authenticated, navigate to login');
    //   this.router.navigate(['login']);
    //   return false;
    // }
    // return true;

    /* Try to auth with the server. If authed resolve to true, else resolve to false */
    this.log('AuthGuardService.can() call auth service login');
    if (!this.auth.isLoggedIn()) {
      // this.store.dispatch(go(['/login', { routeParam: 1 }], { query: 'string' }));
      const navigationExtras: NavigationExtras = {
        queryParams: {
          redirect: url,
        },
        skipLocationChange: true,
      }
      if (this.unauthenticatedRedirectUrl) {
        this.log('AuthGuardService.can() User not logged. Redirect to url:', this.unauthenticatedRedirectUrl);
        // TODO: spostare navigazione su RouterService
        this.router.navigate([this.unauthenticatedRedirectUrl], navigationExtras);
      }
      return false;
    }
    return true;
    // .then((result: any) => {
    //   this.log('AuthGuardService.can() result:', result);
    //   return true;
    // })
    // .catch((error: any) => {
    //   this.log('AuthGuardService.can() error:', error);
    //   this.log('AuthGuardService.can() navigate to /login');
    //   this.router.navigate(['/login']);
    //   return false;
    // });
  }
}