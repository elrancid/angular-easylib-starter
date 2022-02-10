import { Injectable } from '@angular/core';
// import { RouterState } from 'src/app/core/router/store/router.state';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Loggable } from '@easylib/log';

@Injectable({
  providedIn: 'root'
})
export class RouterService extends Loggable {

  public override logs = true;

  private url?: string;
  private routeSnapshot?: ActivatedRouteSnapshot;

  constructor() {
    super()
    this.log('RouterService.constructor()');
  }

  public setCurrentRoute(url: string, routeSnapshot: ActivatedRouteSnapshot) {
    this.log('RouterService.setRequest() url:', url, 'routeSnapshot:', routeSnapshot);
    this.url = url;
    this.routeSnapshot = routeSnapshot;
  }

  public getUrl() {
    return this.url;
  }
  public geRouteSnapshot() {
    return this.routeSnapshot;
  }
}
