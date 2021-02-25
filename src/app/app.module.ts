import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from '@easylib/core';
import { MaterialModule } from '@easylib/material';

import { CoreModule as LocalCoreModule } from './core/core.module';
import { ScaffoldModule } from './features/scaffold/scaffold.module';
import { TestComponent } from './features/test/test.component';
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    MaterialModule,
    LocalCoreModule,
    ScaffoldModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
