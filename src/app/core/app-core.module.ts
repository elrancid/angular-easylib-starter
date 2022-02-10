import { NgModule } from '@angular/core';
import { CoreModule } from '@easylib/core';
import { MaterialModule } from '@easylib/material';
import { AppStoreModule } from '../store/app-store.module';
// import { FlexLayoutModule } from '@angular/flex-layout';
import { AppTranslateModule } from './components/app-translate/app-translate.module';
import { LoadingModule } from './components/loading/loading.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CoreModule, // BrowserModule inside
    MaterialModule, // BrowserAnimationsModule inside
    AppStoreModule, // StoreModule inside

    // FlexLayoutModule,
    AppTranslateModule,
    LoadingModule,
    AuthModule,
  ],
  exports: [
    CoreModule, // TODO: controllare se si può togliere
    MaterialModule, // TODO: controllare se si può togliere
    // CoreComponent
    // StoreModule

    // HttpClientModule,
    // TranslateModule,
  ]
})
export class AppCoreModule { }
