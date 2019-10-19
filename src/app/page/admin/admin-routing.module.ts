import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from 'src/app/components/admin-layout/admin-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrandsComponent } from './errands/errands.component';

const routes: Routes = [
  {
    path: '', component: AdminLayoutComponent, children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'errands', component: ErrandsComponent },
    ]

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
