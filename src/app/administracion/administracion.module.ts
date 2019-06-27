import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [RouterModule.forChild([
    {
      path:'usuario',
      loadChildren:'./usuario/usuario.module#UsuarioModule'
    }
  ])],
  exports: [RouterModule]
})
export class AdministracionModule { }
