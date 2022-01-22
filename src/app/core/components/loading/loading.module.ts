import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingComponent } from './loading.component';
import { SpinnerModule } from '@easylib/material';


@NgModule({
  declarations: [
    LoadingComponent
  ],
  imports: [
    CommonModule,
    SpinnerModule,
  ],
  exports: [
    LoadingComponent,
  ],
})
export class LoadingModule { }
