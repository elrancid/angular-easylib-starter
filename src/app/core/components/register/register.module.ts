import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CardModule } from '@easylib/material';
import { InputModule } from '@easylib/material';
import { ButtonModule } from '@easylib/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';

// import { SharedModule } from 'src/app/shared/shared.module';
import { LazySharedModule } from 'src/app/shared/lazy-shared.module';


@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    FlexLayoutModule,
    // SharedModule,
    LazySharedModule,
    CardModule,
    InputModule,
    ButtonModule,
    ReactiveFormsModule,
  ],
})
export class RegisterModule { }
