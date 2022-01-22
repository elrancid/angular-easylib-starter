import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import * as moment from 'moment';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(public jwtHelper: JwtHelperService, private http: HttpClient) {
    console.log('AuthService.constructor()');
  }

  public isAuthenticated(): boolean {
    console.log('AuthService.isAuthenticated()');
    // Get token from localstorage
    let token = localStorage.getItem('token');
    console.log('AuthService.isAuthenticated() token:', token);
    // Check if token is null or empty
    if (token) {
      // Check whether the token is expired and return
      // true or false
      return !this.jwtHelper.isTokenExpired(token);
    }
    else{
      return false;
    }
  }

  login(email:string, password:string ) {
    return this.http.post<any>('/api/login', {email, password}).
    pipe(
      shareReplay()
    );
    // this is just the HTTP call, we still need to handle the reception of the token
  }

  public register(credential: {email: string, password: string}) {
    console.log('AuthService.register() credential:', credential);
    // TODO
  }

  private setSession(authResult: any) {
    const expiresAt = moment().add(authResult.expiresIn,'second');

    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
  }

  logout(): any {
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
  }

  public isLoggedIn(): any {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut(): any {
    return !this.isLoggedIn();
  }

  getExpiration(): any {
    const expiration = localStorage.getItem("expires_at");
    if (expiration) {
      const expiresAt = JSON.parse(expiration);
      return moment(expiresAt);
    }
    return null;
  }
}