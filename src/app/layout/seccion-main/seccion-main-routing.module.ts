import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeccionMainComponent } from './seccion-main.component';

const routes: Routes = [
  {
    path: '',
    component: SeccionMainComponent,
    outlet:'main'
  },
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeccionMainRoutingModule { }
