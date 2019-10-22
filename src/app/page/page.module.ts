import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginModule } from './login/login.module';
import { AdminModule } from './admin/admin.module';
import { NotfoundModule } from './notfound/notfound.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginModule,
    AdminModule,
    NotfoundModule
  ]
})
export class PageModule { }
