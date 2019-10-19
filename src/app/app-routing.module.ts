import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from './page/notfound/notfound.component';
import { LoginComponent } from './page/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: '404', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
