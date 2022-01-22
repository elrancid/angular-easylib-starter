import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private jwtService: JwtService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.jwtService.has()) {
      const token = this.jwtService.get();
      request = request.clone({
        setHeaders: 
        {
            Authorization: `Bearer ${token}`
        }
      });
    }
    return next.handle(request);
  }
}
