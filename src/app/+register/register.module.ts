import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import {SharedModule} from '../shared/shared.module';

import { RegisterRoutingModule } from './register.routing';
import { RegisterComponent } from './register/register.component';

// Register module bootstrap
@NgModule({
  imports: [
    RegisterRoutingModule,
    MaterialModule.forRoot(),
    CommonModule,
    SharedModule
  ],
  exports: [],
  declarations: [RegisterComponent],
  providers: [],
})
export class RegisterModule { }
