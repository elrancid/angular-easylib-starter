import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { AppState } from 'src/app/store/app.state';
import { ThemeMode, ThemeSize } from 'src/app/core/store/settings/settings.model';
import { getSettingsThemeMode, getSettingsThemeSize } from 'src/app/core/store/settings/settings.selectors';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-theme-manager',
  template: '<easy-theme-manager (theme)="themeChange($event)" [themeMode]="(themeMode$ | async)!" [themeSize]="(themeSize$ | async)!"></easy-theme-manager>',
  styles: [],
})
export class AppThemeManager implements OnInit, OnDestroy {

  public themeMode$: Observable<ThemeMode> = this.store.pipe(select(getSettingsThemeMode));
  public themeSize$: Observable<ThemeSize> = this.store.pipe(select(getSettingsThemeSize));

  private stop$: Subject<void> = new Subject();

  constructor(
    private store: Store<AppState>,
    private theme: ThemeService
  ) {}

  ngOnInit(): void {
    this.themeMode$.pipe(
      takeUntil(this.stop$),
      distinctUntilChanged(),
    )
    .subscribe((themeMode: ThemeMode) => {
      console.log('AppThemeManager themeMode:', themeMode);
      // switch(themeMode) {
      // case 'light':
      //   this.theme.switchTheme('light');
      //   break;
      // case 'dark':
      //   this.theme.switchTheme('dark');
      //   break;
      // }
    });
  }

  ngOnDestroy(): void {
    this.stop$.next();
    this.stop$.complete();
  }

  themeChange(mode: string): void {
    console.log('AppThemeManager.themeChange() mode:', mode);
  }

}
