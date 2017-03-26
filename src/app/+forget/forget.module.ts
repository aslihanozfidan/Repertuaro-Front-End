import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import {SharedModule} from '../shared/shared.module';

import { ForgetRoutingModule } from './forget.routing';
import { ForgetComponent } from './forget/forget.component';

// forget module bootstrap
@NgModule({
  imports: [
    ForgetRoutingModule,
    MaterialModule.forRoot(),
    CommonModule,
    SharedModule
  ],
  exports: [],
  declarations: [ForgetComponent],
  providers: [],
})
export class ForgetModule { }
