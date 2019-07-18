import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SeccionMainComponent } from './seccion-main/seccion-main.component';
import { MenuMainComponent } from './menu-main/menu-main.component';
import { HeaderMainComponent } from './header-main/header-main.component';

import { AdministracionModule } from '../administracion/administracion.module';
import { HttpClientModule } from '@angular/common/http';
import { MenuService } from './menu-main/menu.service';

@NgModule({
  declarations: [LayoutComponent, SeccionMainComponent, MenuMainComponent, HeaderMainComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    AdministracionModule,
    HttpClientModule
  ],
  providers: [MenuService]
})
export class LayoutModule { }
