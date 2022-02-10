import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { LoggableComponent } from '@easylib/log';
import { Observable, Subject } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { distinctUntilChanged, map, takeUntil } from 'rxjs/operators';
import { AppState } from 'src/app/store/app.state';
import { Language } from 'src/app/core/store/settings/settings.model';
import { getSettingsLanguage } from 'src/app/core/store/settings/settings.selectors';
import { UserState } from 'src/app/core/store/auth/auth.model';
import { getAuthUser, getAuthReady, getAuthSessionId } from 'src/app/core/store/auth/auth.selectors';
import { NavListItems } from '@easylib/material';
import { AuthService } from '../../auth/auth.service';
import { menu } from 'src/app/features/config';
import { actionCompositionsChange } from '../../../store/compositions/compositions.actions';
import { actionMixersChange } from '../../../store/mixers/mixers.actions';
import { actionEventsChange } from '../../../store/events/events.actions';
import { actionGroupsChange } from '../../../store/groups/groups.actions';
import { actionSessionChange } from '../../../store/session/session.actions';
@Component({
  selector: 'app-scaffold',
  templateUrl: './scaffold.component.html',
  styleUrls: ['./scaffold.component.scss']
})
export class ScaffoldComponent extends LoggableComponent implements OnInit, OnDestroy {

  @Input() override logs = false;

  @ViewChild('sidenav') sidenav!: ElementRef;

  // private navigation = [
  //   { routerLink: 'home', label: 'pages.home.title' },
  //   { routerLink: 'compositionedit', label: 'pages.compositionEdit.title' },
  // ];
  // private navigationList = [
  //   ...this.navigation,
  //   { routerLink: 'settings', label: 'pages.settings.title' }
  // ];
  translatedNavigationList: NavListItems = [];

  private stop$: Subject<void> = new Subject();
  public language$: Observable<Language> = this.store.pipe(select(getSettingsLanguage));
  public ready$: Observable<boolean | undefined> = this.store.pipe(select(getAuthReady));
  public user$: Observable<UserState | undefined> = this.store.pipe(select(getAuthUser));
  public sessionId$: Observable<string | undefined> = this.store.pipe(select(getAuthSessionId));

  constructor(
    protected store: Store<AppState>,
    protected translate: TranslateService,
    protected auth: AuthService,
  ) {
    super();
    this.log('ScaffoldComponent.constructor()');
    // this.log('*********');
    // this.user$ = this.auth.getUser$();
    // this language will be used as a fallback when a translation isn't found in the current language
    // translate.setDefaultLang('en');
    // // the lang to use, if the lang isn't available, it will use the current loader to get them
    // translate.use('it');
  }

  ngOnInit(): void {
    this.log('ScaffoldComponent.ngOnInit()');
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
        const translatedNavigationList: NavListItems = [];
        // this.navigationList.forEach((element: any) => {
          menu.forEach((element: any) => {
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

    // this.twig.init(red5Config);
    this.user$.pipe(
      takeUntil(this.stop$),
      distinctUntilChanged(),
    )
    .subscribe((user: UserState | undefined) => {
      this.log('ScaffoldComponent - user$:', user);
      if (user) {
        this.log('ScaffoldComponent - TODO: initialize all after user is set...');
        // this.twig.connect();
        // this.feathers.serviceFindWatch('composition')
        // .pipe(
        //   takeUntil(this.stop$),
        //   distinctUntilChanged(),
        //   // our data is paginated, so map to .data
        //   map((m: Paginated<any>) => {
        //     this.log('***** AppComponent. twig.listCompositions() map m:', m);
        //     return m.data;
        //   }),
        //   // reverse the messages array, to have the most recent message at the end
        //   // necessary because we get a descendingly sorted array from the data service
        //   map((m: Array<any>) => m.reverse()),
        // );
        // .subscribe((compositions: any[]) => {
        //   this.log('***** AppComponent. twig.listCompositions():', compositions);
        //   this.store.dispatch(actionCompositionsChange({compositions}));
        // });

        // this.feathers.serviceFindWatch('event')
        // .pipe(
        //   takeUntil(this.stop$),
        //   distinctUntilChanged(),
        // )
        // .subscribe((events: any[]) => {
        //   this.log('***** AppComponent. watch events:', events);
        //   this.store.dispatch(actionEventsChange({events}));
        // });

        // this.feathers.serviceFindWatch('composition')
        // .pipe(
        //   takeUntil(this.stop$),
        //   distinctUntilChanged(),
        // )
        // .subscribe((compositions: any[]) => {
        //   this.log('***** AppComponent. watch compositions:', compositions);
        //   this.store.dispatch(actionCompositionsChange({compositions}));
        // });

        // this.feathers.serviceFindWatch('mixer')
        // .pipe(
        //   takeUntil(this.stop$),
        //   distinctUntilChanged(),
        // )
        // .subscribe((mixers: any[]) => {
        //   this.log('***** AppComponent. watch mixers:', mixers);
        //   this.store.dispatch(actionMixersChange({mixers}));
        // });

        // this.feathers.serviceFindWatch('group')
        // .pipe(
        //   takeUntil(this.stop$),
        //   distinctUntilChanged(),
        // )
        // .subscribe((groups: any[]) => {
        //   this.log('***** AppComponent. watch groups:', groups);
        //   this.store.dispatch(actionGroupsChange({groups}));
        // });
      }
      // this.feathers.error$
      // .pipe(
      //   takeUntil(this.stop$),
      // )
      // .subscribe((context: HookContext) => {
      //   this.error(`***** AppComponent Error from feathers in "${context.path}" service service "${context.service}" method "${context.method}"`, context.error.stack);
      //   console.log('context.error: ', context.error);
      //   console.log('context: ', context);
      // });
    });

    this.sessionId$.pipe(
      takeUntil(this.stop$),
      distinctUntilChanged(),
    )
    .subscribe((sessionId: string | undefined) => {
      this.log('ScaffoldComponent - sessionId$:', sessionId);
      if (sessionId) {
        this.log('ScaffoldComponent - TODO: initialize all after session is set...');
        // this.feathers.serviceGetWatch('session', sessionId!)
        // .pipe(
        //   takeUntil(this.stop$),
        //   distinctUntilChanged(),
        // )
        // .subscribe((session: any) => {
        //   this.log('***** AppComponent. watch session:', session);
        //   this.store.dispatch(actionSessionChange(session));
        // });
      }
      else {
        this.store.dispatch(actionSessionChange({}));
      }
    });
  }

  ngOnDestroy(): void {
    this.stop$.next();
    this.stop$.complete();
  }

  logout(): void {
    this.log('ScaffoldComponent.logout()');
    this.auth.logout();
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

}
