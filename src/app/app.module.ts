import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { NotfoundComponent } from './page/notfound/notfound.component';
import { DrawerModule } from './components/drawer/drawer.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DrawerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
