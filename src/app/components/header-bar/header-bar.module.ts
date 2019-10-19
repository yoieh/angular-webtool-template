import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderBarComponent } from './header-bar.component';

import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    HeaderBarComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  exports: [HeaderBarComponent]
})
export class HeaderBarModule { }
