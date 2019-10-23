import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { AdminLayoutComponent } from 'src/app/components/admin-layout/admin-layout.component';
import { HeaderBarModule } from 'src/app/components/header-bar/header-bar.module';
import { DrawerModule } from 'src/app/components/drawer/drawer.module';
import { ErrandsComponent } from './errands/errands.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    ErrandsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    DashboardModule,
    HeaderBarModule,
    DrawerModule,
    FlexLayoutModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatInputModule
  ]
})
export class AdminModule { }
