import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ScaffoldComponent } from './scaffold.component';
// import { ThemeModule } from 'src/app/core/theme/theme.module';
// import { ThemeManagerModule } from '@easylib/material';
// import { MatListModule } from '@angular/material/list';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatIconModule } from '@angular/material/icon';
// import { MatButtonModule } from '@angular/material/button';
// import { AppRoutingModule } from 'src/app/app-routing.module';

// import { ButtonModule } from 'src/app/shared/material/button/button.module';
// import { MomentModule } from 'ngx-moment';
// import { ScaffoldComponent } from './scaffold.component';

import { SharedModule } from 'src/app/shared/shared.module';

import { SidenavModule } from '@easylib/material';
import { NavListModule } from '@easylib/material';
import { BrowserTabsModule } from '@easylib/material';
import { ButtonModule } from '@easylib/material';

import { AppThemeManagerModule } from '../app-theme-manager/app-theme-manager.module';

@NgModule({
  declarations: [
    ScaffoldComponent,
  ],
  imports: [
    CommonModule,
    // ThemeModule,
    // ThemeManagerModule,
    // MatSidenavModule,
    SidenavModule,
    NavListModule,
    BrowserTabsModule,
    ButtonModule,

    // MatListModule,
    // MatToolbarModule,
    // MatIconModule,
    // MatButtonModule,

    AppThemeManagerModule,

    RouterModule,
    // AppRoutingModule,
    // ButtonModule,
    // MomentModule,

    SharedModule,
  ],
  exports: [
    ScaffoldComponent,
    // MatSidenavModule,
    // MatToolbarModule,
    // MatIconModule,
    // MatButtonModule,
    // AppRoutingModule,
  ],
})
export class ScaffoldModule { }
