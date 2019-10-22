import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DrawerModule } from './components/drawer/drawer.module';
import { HeaderBarModule } from './components/header-bar/header-bar.module';
import { PageModule } from './page/page.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PageModule,
    DrawerModule,
    HeaderBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
