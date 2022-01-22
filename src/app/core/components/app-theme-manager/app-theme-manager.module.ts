import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { CoreModule } from '@easylib/core';
// import { MaterialModule } from '@easylib/material';
import { ThemeManagerModule } from '@easylib/material';
import { AppThemeManager } from './app-theme-manager.component';


@NgModule({
  declarations: [
    AppThemeManager,
  ],
  imports: [
    CommonModule,
    ThemeManagerModule,
  ],
  exports: [
    AppThemeManager,
  ]
})
export class AppThemeManagerModule { }
