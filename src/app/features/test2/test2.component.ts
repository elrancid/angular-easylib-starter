import { Component, Inject, OnInit } from '@angular/core';

import { LoggableComponent } from '@easylib/log';
// import { DialogService } from '@easylib/material';
// import { DialogComponent } from '@easylib/material';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss']
})
export class Test2Component extends LoggableComponent implements OnInit {

  animal: string;
  name: string;

  // constructor(private dialog: DialogService) {
  constructor(public dialog: MatDialog) {
    super();
  }

  ngOnInit(): void {
  }

  openDialog(): void {
    // const dialogRef = this.dialog.openDialog(DialogComponent);
    const dialogRef = this.dialog.open(ExampleDialogComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}

@Component({
  selector: 'app-example-dialog',
  templateUrl: 'example-dialog.html',
})
export class ExampleDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ExampleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
