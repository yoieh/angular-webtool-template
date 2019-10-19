import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { NotfoundComponent } from './page/notfound/notfound.component';
import { LoginComponent } from './page/login/login.component';

import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: '', component: AdminLayoutComponent, children: [
      { path: 'dashboard', component: DashboardComponent },
    ]

  },
  { path: '404', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
