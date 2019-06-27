import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeccionMainRoutingModule } from './seccion-main-routing.module';
import { SeccionMainComponent } from './seccion-main.component';

@NgModule({
  declarations: [SeccionMainComponent],
  imports: [
    CommonModule,
    SeccionMainRoutingModule
  ]
})
export class SeccionMainModule { }
