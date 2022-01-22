import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Test2RoutingModule } from './test2-routing.module';
import { Test2Component } from './test2.component';

// import { DialogService, DialogModule } from '@easylib/material';
import { MatDialogModule } from '@angular/material/dialog';
// import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@NgModule({
  declarations: [Test2Component],
  imports: [
    CommonModule,
    Test2RoutingModule,
    // DialogModule,
    MatDialogModule,
    // MatDialog,
    // MatDialogRef,
  ],
//   providers: [
//     {
//       provide: MatDialogRef,
//       useValue: {}
//     },
//     DialogService
//  ],
})
export class Test2Module { }
