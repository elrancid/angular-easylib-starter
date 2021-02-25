import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
// import {Router} from '@angular/router';
// import { LoggableComponent } from 'src/app/core/log/loggable.component';
import { LoggableComponent } from '@easylib/log';
// import { AuthService } from 'src/app/core/auth/auth.service';
import { Observable, Subject } from 'rxjs';
// import { RouterService } from 'src/app/core/router/router.service';
// import { MemoryboxService } from 'src/app/core/services/memorybox.service';
// import { MemoryboxType } from 'src/app/core/services/memorybox-type';
// import { distinctUntilChanged, takeUntil } from 'rxjs/operators';
// import { Moment } from 'moment';
// import * as moment from 'moment';

// import { ElementRef } from '@angular/core';
// import { MatSidenavContainer } from '@angular/material/sidenav';

@Component({
  selector: 'app-scaffold',
  templateUrl: './scaffold.component.html',
  styleUrls: ['./scaffold.component.scss']
})
export class ScaffoldComponent extends LoggableComponent implements OnInit, OnDestroy {

  @Input() logs = true;

  // @ViewChild('container') container: ElementRef<MatSidenavContainer>;
  // @ViewChild('sidenav') sidenav: ElementRef;

  logo = require('../../../assets/icons/logo.png').default;
  languages = ['it', 'en'];
  navigation = [
    { link: 'home', label: 'menu.home' },
    { link: 'test', label: 'menu.test' },
    { link: 'about', label: 'menu.about' },
    { link: 'feature-list', label: 'menu.features' },
    { link: 'examples', label: 'menu.examples' }
  ];
  navigationSideMenu = [
    ...this.navigation,
    { link: 'settings', label: 'menu.settings' }
  ];

  // public user$: Observable<object> = this.auth.getUser$();
  // public activeMemorybox$: Observable<MemoryboxType> = this.memoryboxService.getActiveMemorybox$();
  private stop$: Subject<void> = new Subject();
  // public activeMemorybox: MemoryboxType;
  // public closedMemorybox: boolean;
  // public closedAtMemorybox: Moment;

  public sidenavOpened: boolean = true;
  public sidenavAutosize: boolean = true;

  constructor(
    // private auth: AuthService,
    // // private router: Router,
    // private router: RouterService,
    // public memoryboxService: MemoryboxService,
  ) {
    super();
    // this.user$ = this.auth.getUser$();
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.sidenavAutosize = false;
      // this.sidenavOpened = true;
      // this.log(this.container);
      // (this.container) as MatSidenavContainer
    }, 1000);
    // this.container.updateContentMargins();

    // setTimeout(() => {
    //   this.sidenavOpened = false;
    // }, 2000);
    // setTimeout(() => {
    //   this.sidenavOpened = true;
    // }, 4000);

    // this.memoryboxService.getActiveMemorybox$()
    // .pipe(
    //   takeUntil(this.stop$),
    //   distinctUntilChanged(),
    // )
    // .subscribe((memorybox: MemoryboxType) => {
    //   this.log('ScaffoldComponent getActiveMemorybox$ valueChanges memorybox[' + (typeof memorybox) + ']:', memorybox);
    //   this.activeMemorybox = memorybox;
    //   if (memorybox && memorybox.closed_at) {
    //     this.closedAtMemorybox = moment(memorybox.closed_at);
    //   }
    //   else {
    //     this.closedAtMemorybox = null;
    //   }
    //   this.log('ScaffoldComponent getActiveMemorybox$ valueChanges closedAtMemorybox[' + (typeof this.closedAtMemorybox) + ']:', this.closedAtMemorybox);
    // });
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
