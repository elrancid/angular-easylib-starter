import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';
// import { NgChatModule } from 'ng-chat';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TranslateModule
    // FormsModule,
    // ReactiveFormsModule,
    // RouterModule,
    // NgChatModule,
  ],
  exports: [
    CommonModule,
    TranslateModule,
    // FormsModule, ReactiveFormsModule,
    // RouterModule, NgChatModule
  ]
})
export class SharedModule {}
