import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { NeedAuthGuard } from './login/need-auth-guard';
const routes: Routes = [
  {
    path:'',
    component: LoginComponent,
  },
  {
    path:'',
    component: NavBarComponent,
    outlet: 'nav'
  },
  {
    path:'home',
    component: HomeComponent,
    canActivate:[NeedAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
