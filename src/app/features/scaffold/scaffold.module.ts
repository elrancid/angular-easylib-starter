import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ScaffoldComponent } from './scaffold.component';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
// import { AppRoutingModule } from 'src/app/app-routing.module';

// import { ButtonModule } from 'src/app/shared/material/button/button.module';
// import { MomentModule } from 'ngx-moment';
// import { ScaffoldComponent } from './scaffold.component';

import { SidenavModule } from '@easylib/material';

import {
  HttpClientModule,
  HttpClient,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

// AoT requires an exported function for factories
export function httpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http); // load translations from "/assets/i18n/[lang].json"
  // return new TranslateHttpLoader(http, `${environment.i18nPrefix}/assets/i18n/`, '.json');
  // return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    ScaffoldComponent
  ],
  imports: [
    CommonModule,
    // MatSidenavModule,
    SidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,

    RouterModule,
    // AppRoutingModule,
    // ButtonModule,
    // MomentModule,

    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'it',
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports: [
    ScaffoldComponent,
    // MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    // AppRoutingModule,
  ],
})
export class ScaffoldModule { }
