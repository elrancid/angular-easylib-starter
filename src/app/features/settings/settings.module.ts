import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { FlexLayoutModule } from '@angular/flex-layout';
// import { FormModule } from '../../form/form.module';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';

import { ToggleModule } from '@easylib/material';
import { RadioButtonsModule } from '@easylib/material';

@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    // FlexLayoutModule,
    // FormModule,
    ToggleModule,
    RadioButtonsModule,
  ],
})
export class SettingsModule { }
