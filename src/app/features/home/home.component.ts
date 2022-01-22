import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { LoggableComponent } from '@easylib/log';
import { ComponentTab, OnComponentTabActivate } from '@easylib/material';
import { TranslateService } from '@ngx-translate/core';
import { pages } from 'src/app/features/config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends LoggableComponent implements OnInit, OnDestroy, ComponentTab, OnComponentTabActivate {

  @Input() logs = true;

  browserTabLabel = this.translate.instant(pages.home.label);
  browserTabIcon = pages.home.icon;

  constructor(private translate: TranslateService) {
    super();
    this.log('costructor');
  }

  ngOnInit() {
    this.log('ngOnInit');
  }

  ngOnDestroy() {
    this.log('ngOnDestroy');
  }

  onComponentTabActivate(): void {
    this.log('onComponentTabActivate');
  }
}
