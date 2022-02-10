import { Injectable } from '@angular/core';
import { 
  Router,
  CanActivate,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Loggable } from '@easylib/log';
import { AuthService } from './auth.service';
// import decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService extends Loggable implements CanActivate {

  public override logs: boolean = true;

  constructor (public auth: AuthService, public router: Router) {
    super();
  }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    this.log('RoleGuardService.canActivate() route:', route);
    // this will be passed from the route config
    // on the data property
    const expectedRole = route.data.expectedRole;
    const token = localStorage.getItem('token');
    // decode the token to get its payload
    const tokenPayload: object = decode(token);
    if (
      !this.auth.isAuthenticated() ||
      tokenPayload.role !== expectedRole
    ) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
