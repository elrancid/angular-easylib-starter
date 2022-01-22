import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { LoadingComponent } from './core/components/loading/loading.component';
import { HomeComponent } from './features/home/home.component';
import { TestComponent } from './features/test/test.component';

// import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: 'home', component: HomeComponent },
  { path: 'test', component: TestComponent },
  { path: 'test2', loadChildren: () => import('./features/test2/test2.module').then(m => m.Test2Module) },
  // { path: 'home', loadChildren: () => import('./testPages/home/home.module').then(m => m.HomeModule) },
  // { path: 'test', loadChildren: () => import('./testPages/test/test.module').then(m => m.TestModule) },
  { path: 'settings', loadChildren: () => import('./features/settings/settings.module').then(m => m.SettingsModule) },
  {
    path: '**',
    // component: HomeComponent,
    component: LoadingComponent,
    data: { title: 'Loading' },
    // runGuardsAndResolvers: 'always'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    // TranslateModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
