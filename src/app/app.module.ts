import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotfoundComponent } from './page/notfound/notfound.component';

import { DrawerModule } from './components/drawer/drawer.module';
import { HeaderBarModule } from './components/header-bar/header-bar.module';
import { LoginComponent } from './page/login/login.component';
import { AdminModule } from './page/admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AdminModule,
    DrawerModule,
    HeaderBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
