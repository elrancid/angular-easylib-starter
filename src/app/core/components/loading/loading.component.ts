import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  template: `
    <easy-spinner></easy-spinner>
  `,
  styles: [
    ':host { display: inline-block; width: 100%; height: 100%; }',
  ]
})
export class LoadingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
