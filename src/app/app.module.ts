import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotfoundComponent } from './page/notfound/notfound.component';

import { DrawerModule } from './components/drawer/drawer.module';
import { HeaderBarModule } from './components/header-bar/header-bar.module';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { LoginComponent } from './page/login/login.component';
import { DashboardModule } from './page/dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    AdminLayoutComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DrawerModule,
    HeaderBarModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
