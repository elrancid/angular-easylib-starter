import { NgModule } from '@angular/core';
// import { CoreModule } from '@easylib/core';
import { MaterialModule } from '@easylib/material';
// import { FlexLayoutModule } from '@angular/flex-layout';
import { AppStoreModule } from './store/app-store.module';
import { AppTranslateModule } from './components/app-translate/app-translate.module';
import { LoadingModule } from './components/loading/loading.module';

@NgModule({
  declarations: [
  ],
  imports: [
    // CoreModule,
    MaterialModule,
    // FlexLayoutModule,

    AppStoreModule,
    AppTranslateModule,
    LoadingModule,
  ],
  exports: [
    // CoreModule,
    // MaterialModule,
    // CoreComponent
    // StoreModule

    // HttpClientModule,
    // TranslateModule,
  ]
})
export class AppCoreModule { }
