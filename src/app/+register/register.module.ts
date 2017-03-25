import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { RegisterRoutingModule } from './register.routing';
import { SharedModule } from './../shared/shared.module';
import { RegisterComponent } from './register/register.component';
import { UsersService } from './../services/users.service';

// Register module bootstrap
@NgModule({
  imports: [
    RegisterRoutingModule,SharedModule,
    MaterialModule.forRoot(),
    CommonModule
  ],
  exports: [],
  declarations: [RegisterComponent],
  providers: [UsersService],
})
export class RegisterModule { }
