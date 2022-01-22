import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AppCoreModule } from './core/app-core.module';
// import { AppThemeManagerModule } from './core/app-theme-manager/app-theme-manager.module';
import { ScaffoldModule } from './core/components/scaffold/scaffold.module';
import { TestComponent } from './features/test/test.component';

// import { ToggleThemeModeComponent } from './shared/toggle-theme-mode/toggle-theme-mode.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    // ToggleThemeModeComponent,
  ],
  imports: [
    BrowserModule,

    // AppThemeManagerModule,
    AppRoutingModule,
    AppCoreModule,

    ScaffoldModule,
  ],
  // providers: [
  // ],
  // exports: [
  // ],
  bootstrap: [AppComponent]
})
export class AppModule {}
