import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NeedAuthGuard } from './login/need-auth-guard';
const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'app',
    loadChildren: './layout/layout.module#LayoutModule',
    canActivate: [NeedAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
