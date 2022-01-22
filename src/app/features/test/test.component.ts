import { Component, OnInit } from '@angular/core';

import { LoggableComponent } from '@easylib/log';
// import { DialogService } from '@easylib/material';
// import { DialogComponent } from '@easylib/material';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent extends LoggableComponent implements OnInit {

  // constructor(private dialog: DialogService) {
  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  openDialog(): void {
    // const dialogRef = this.dialog.openDialog(DialogComponent);
  }

}
