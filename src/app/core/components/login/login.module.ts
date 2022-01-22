import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from '@easylib/material';
import { InputModule } from '@easylib/material';
import { ButtonModule } from '@easylib/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';

// import { SharedModule } from 'src/app/shared/shared.module';
import { LazySharedModule } from 'src/app/shared/lazy-shared.module';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FlexLayoutModule,
    // SharedModule,
    LazySharedModule,
    CardModule,
    InputModule,
    ButtonModule,
    ReactiveFormsModule,
  ],
})
export class LoginModule { }
