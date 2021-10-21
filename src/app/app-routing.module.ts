import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Tab3Component } from './tab3/tab3.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'activity-detail/:activityID',
    loadChildren: () =>
      import('./activity-detail/activity-detail.module').then(
        (m) => m.ActivityDetailModule
      ),
  },
  {
    path: 'tab3',
    loadChildren: () => import('./tab3/tab3.module').then((m) => m.Tab3Module),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
