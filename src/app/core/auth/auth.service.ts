// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ApiService } from '@easylib/core';
import { Loggable } from '@easylib/log';
import * as moment from 'moment';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends Loggable {

  public override logs = true;

  constructor(
    public jwtHelper: JwtHelperService,
    // private http: HttpClient,
    private apiService: ApiService,
  ) {
    super();
    this.log('AuthService.constructor()');
    this.apiService.logs = true;
  }

  public isAuthenticated(): boolean {
    this.log('AuthService.isAuthenticated()');
    // Get token from localstorage
    let token = localStorage.getItem('token');
    this.log('AuthService.isAuthenticated() token:', token);
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

  login(credentials: Record<string, any>): Promise<any> {
    this.log('AuthService.login() credential:', credentials);
    return this.apiService.post('auth/login');
    // .then((result) => {
    //   console.log('AuthService.login() result:', result);
    // })
    // .catch((error) => {
    //   console.log('AuthService.login() error:', error);
    // });
    // return this.http.post<any>('/api/login', credentials).
    // pipe(
    //   shareReplay()
    // );
  }

  public getToken(): string | null {
    // return localStorage.getItem('access_token');
    return null;
  }

  public register(credentials: {email: string, password: string}) {
    this.log('AuthService.register() credential:', credentials);
    return this.apiService.post('user/create');
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
    this.log('AuthService.isLoggedIn()');
    const isBefore = moment().isBefore(this.getExpiration());
    this.log('AuthService.isLoggedIn() isBefore:', isBefore);
    return isBefore;
  }

  // isLoggedOut(): any {
  //   return !this.isLoggedIn();
  // }

  getExpiration(): any {
    const expiration = localStorage.getItem("expires_at");
    if (expiration) {
      const expiresAt = JSON.parse(expiration);
      return moment(expiresAt);
    }
    return null;
  }
}
