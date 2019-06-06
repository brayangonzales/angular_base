import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SeccionMainComponent } from './seccion-main/seccion-main.component';
import { MenuMainComponent } from './menu-main/menu-main.component';

@NgModule({
  declarations: [LayoutComponent, SeccionMainComponent, MenuMainComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
