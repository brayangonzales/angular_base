import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { SeccionMainComponent } from './seccion-main/seccion-main.component';
import { MenuMainComponent } from './menu-main/menu-main.component';
const routes: Routes = [
  {
    path:'',
    component: LayoutComponent,
    children:[
      {
        path:'',
        component: SeccionMainComponent,
        outlet: 'main'
      },
      {
        path:'',
        component: MenuMainComponent,
        outlet: 'menu'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
