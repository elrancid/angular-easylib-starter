import { NgModule } from '@angular/core';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
// import { AuthService } from './auth.service';

// function jwtOptionsFactory(auth: AuthService) {
//   return {
//     tokenGetter: () => {
//       return auth.getToken();
//     },
//     allowedDomains: ['localhost'],
//   };
// }

@NgModule({
  declarations: [],
  imports: [
    JwtModule.forRoot({
      config: {
        tokenGetter: () => '123456',
        allowedDomains: ['localhost'],
        // disallowedRoutes: ["http://example.com/examplebadroute/"],
      }
      // jwtOptionsProvider: {
      //   provide: JWT_OPTIONS,
      //   useFactory: jwtOptionsFactory,
      //   deps: [AuthService],
      // }
    }),
  ],
  // providers: [AuthService]
})
export class AuthModule {}
