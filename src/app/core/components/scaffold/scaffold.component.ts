import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
// import {Router} from '@angular/router';
// import { LoggableComponent } from 'src/app/core/log/loggable.component';
import { LoggableComponent } from '@easylib/log';
// import { AuthService } from 'src/app/core/auth/auth.service';
import { Observable, Subject } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/core/store/core.state';
import { Language } from 'src/app/core/store/settings/settings.model';
import { getSettingsLanguage } from 'src/app/core/store/settings/settings.selectors';

// import { SidenavComponent } from '@easylib/material/lib/sidenav/sidenav.component';

// import { RouterService } from 'src/app/core/router/router.service';
// import { MemoryboxService } from 'src/app/core/services/memorybox.service';
// import { MemoryboxType } from 'src/app/core/services/memorybox-type';
// import { distinctUntilChanged, takeUntil } from 'rxjs/operators';
// import { Moment } from 'moment';
// import * as moment from 'moment';

// import { ElementRef } from '@angular/core';
// import { MatSidenavContainer } from '@angular/material/sidenav';

import { TranslateService } from '@ngx-translate/core';
import { distinctUntilChanged, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-scaffold',
  templateUrl: './scaffold.component.html',
  styleUrls: ['./scaffold.component.scss']
})
export class ScaffoldComponent extends LoggableComponent implements OnInit, OnDestroy {

  @Input() logs = true;

  // @ViewChild('container') container: ElementRef<MatSidenavContainer>;
  @ViewChild('sidenav') sidenav: ElementRef;
  // @ViewChild(SidenavComponent) private sidenav: SidenavComponent;
  // public sidenavOpened: boolean = true;
  // public sidenavAutosize: boolean = true;


  logo = require('../../../../assets/icons/logo.png').default;
  // languages = ['it', 'en'];
  private navigation = [
    { routerLink: 'home', label: 'pages.home' },
    { routerLink: 'test', label: 'pages.test' },
    { routerLink: 'test2', label: 'test2' },
    { routerLink: 'about', label: 'pages.about' },
    { routerLink: 'feature-list', label: 'pages.features' },
    { routerLink: 'examples', label: 'pages.examples' }
  ];
  private navigationList = [
    ...this.navigation,
    { routerLink: 'settings', label: 'pages.settings' }
  ];
  translatedNavigationList = [];

  // public user$: Observable<object> = this.auth.getUser$();
  // public activeMemorybox$: Observable<MemoryboxType> = this.memoryboxService.getActiveMemorybox$();
  private stop$: Subject<void> = new Subject();
  // public activeMemorybox: MemoryboxType;
  // public closedMemorybox: boolean;
  // public closedAtMemorybox: Moment;

  public language$: Observable<Language> = this.store.pipe(select(getSettingsLanguage));

  constructor(
    private store: Store<AppState>,
    // private auth: AuthService,
    // // private router: Router,
    // private router: RouterService,
    // public memoryboxService: MemoryboxService,
    private translate: TranslateService,
  ) {
    super();
    // this.log('*********');
    // this.user$ = this.auth.getUser$();
    // this language will be used as a fallback when a translation isn't found in the current language
    // translate.setDefaultLang('en');
    // // the lang to use, if the lang isn't available, it will use the current loader to get them
    // translate.use('it');
  }

  ngOnInit(): void {
    // this.log('*********');
    // setTimeout(() => {
    //   this.sidenavAutosize = false;
    //   // this.sidenavOpened = true;
    //   // this.log(this.container);
    //   // (this.container) as MatSidenavContainer
    // }, 1000);

    // this.container.updateContentMargins();

    // setTimeout(() => {
    //   this.sidenavOpened = false;
    // }, 2000);
    // setTimeout(() => {
    //   this.sidenavOpened = true;
    // }, 4000);

    this.language$.pipe(
      takeUntil(this.stop$),
      distinctUntilChanged(),
    )
    .subscribe((language: Language) => {
      setTimeout(() => {
        // this.log('ScaffoldComponent language:', language);
        const translatedNavigationList = [];
        this.navigationList.forEach((element: any) => {
          translatedNavigationList.push({
            ...element,
            label: this.translate.instant(element.title, language),
          });
          // this.log('element:', element, 'translate:', this.translate.instant(element.title));
        });
        // this.log('ScaffoldComponent navigationList:', this.navigationList);
        // this.log('ScaffoldComponent translatedNavigationList:', translatedNavigationList);
        this.translatedNavigationList = translatedNavigationList;
        // this.log('sidenav:', this.sidenav);
        (this.sidenav as any).redraw();
      });
    });
  }

  ngOnDestroy(): void {
    this.stop$.next();
    this.stop$.complete();
  }

  logout(): void {
    this.log('ScaffoldComponent.logout()');
    // this.auth.callApiLogout()
    // .then((result) => {
    //   this.log('ScaffoldComponent.logout() result:', result);
    //   // this.router.navigate(['/login']);
    //   this.router.navigate('/login');
    // })
    // .catch((error) => {
    //   this.log('ScaffoldComponent.logout() error:', error);
    // });
  }

  // openedChange(evt): void {
  //   this.log('evt:', evt);
  // }
}
