import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { RepertuarRoutingModule } from './repertuar.routing';
import { SharedModule } from './../shared/shared.module';
import { RepertuarComponent } from './repertuar/repertuar.component';
import { RepertuarMainComponent } from './repertuar_main/repertuar_main.component';
import { DurumComponent } from './durum/durum.component';
import { UsersService } from './../services/users.service';

// repertuar module bootstrap
@NgModule({
  imports: [
    RepertuarRoutingModule,SharedModule,
    MaterialModule.forRoot(),
    CommonModule
  ],
  exports: [],
  declarations: [RepertuarComponent, DurumComponent, RepertuarMainComponent],
  providers: [UsersService],
})
export class RepertuarModule { }
