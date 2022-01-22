import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { FlexLayoutModule } from '@angular/flex-layout';
// import { FormModule } from '../../form/form.module';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';

import { ToggleModule } from '@easylib/material';
import { RadioButtonsModule } from '@easylib/material';

// import { TranslateModule } from '@ngx-translate/core';
import { LazySharedModule } from 'src/app/shared/lazy-shared.module';

// import { MatRadioModule } from '@angular/material/radio';
// import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    // FlexLayoutModule,
    // FormModule,
    ToggleModule,
    RadioButtonsModule,

    // MatRadioModule,
    // ReactiveFormsModule,
    // TranslateModule.forChild({ extend: true }),
    LazySharedModule
  ],
})
export class SettingsModule { }
