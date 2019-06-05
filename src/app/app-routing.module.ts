import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NeedAuthGuard } from './login/need-auth-guard';
import { CanActivate } from '@angular/router/src/utils/preactivation';
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
    path:'app',
    loadChildren:'./layout/layout.module#LayoutModule',
    canActivate:[NeedAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
