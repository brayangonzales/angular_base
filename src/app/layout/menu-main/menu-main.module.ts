import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuMainRoutingModule } from './menu-main-routing.module';
import { MenuMainComponent } from '../menu-main.component';

@NgModule({
  declarations: [MenuMainComponent],
  imports: [
    CommonModule,
    MenuMainRoutingModule
  ]
})
export class MenuMainModule { }
