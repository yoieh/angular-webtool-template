import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminModule } from './admin/admin.module';
import { NotfoundModule } from './notfound/notfound.module';
import { PublicModule } from './public/public.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PublicModule,
    AdminModule,
    NotfoundModule
  ]
})
export class PageModule { }
