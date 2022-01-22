import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-pages',
  template: `
  <router-outlet></router-outlet>
  `,
  styles: [
  ]
})
export class AuthPagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
