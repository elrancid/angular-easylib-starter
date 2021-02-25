import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
// export class SidenavComponent implements OnInit {
export class SidenavComponent {

  public opened = true;
  public autosize = true;

  @ViewChild(MatSidenav) private sidenav: MatSidenav;

  constructor() {
    setTimeout(() => {
      this.autosize = false;
    }, 1000);
  }

  // ngOnInit(): void {
  //   setTimeout(() => {
  //     this.autosize = false;
  //   }, 1000);
  // }

  open(): void {
    this.sidenav.open();
  }

  close(): void {
    this.sidenav.close();
  }

  toggle(): void {
    this.sidenav.toggle();
  }

}
