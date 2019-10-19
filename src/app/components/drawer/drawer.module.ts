import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrawerComponent } from './drawer.component';

import { MatSidenavModule } from '@angular/material/sidenav'
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    DrawerComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatIconModule,
    MatDividerModule,
    MatListModule
  ],
  exports: [DrawerComponent]
})
export class DrawerModule { }
