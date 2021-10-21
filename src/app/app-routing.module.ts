import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanEnterHomePageGuard } from './can-enter-home-page.guard';
import { CanEnterLoginPageGuard } from './can-enter-login-page.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [CanEnterHomePageGuard] },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [CanEnterHomePageGuard],
  },
  {
    path: 'home/activity-detail/:activityID',
    loadChildren: () =>
      import('./activity-detail/activity-detail.module').then(
        (m) => m.ActivityDetailModule
      ),
    canActivate: [CanEnterHomePageGuard],
  },
  {
    path: 'tab3',
    loadChildren: () => import('./tab3/tab3.module').then((m) => m.Tab3Module),
    canActivate: [CanEnterHomePageGuard],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
    canActivate: [CanEnterLoginPageGuard],
  },
  { path: '**', redirectTo: '/home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
