import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { SeccionMainComponent } from './seccion-main/seccion-main.component';

const routes: Routes = [
  {
    path:'',
    component: LayoutComponent
  },
  {
    path:'',
    component: SeccionMainComponent,
    outlet: 'main'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
