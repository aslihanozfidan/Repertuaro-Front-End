import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import {SharedModule} from '../shared/shared.module';

import { HomeRoutingModule } from './home.routing';
import { HomeComponent } from './home/home.component';

// home module bootstrap
@NgModule({
  imports: [
    HomeRoutingModule,
    MaterialModule.forRoot(),
    CommonModule,
    SharedModule
  ],
  exports: [],
  declarations: [HomeComponent],
  providers: [],
})
export class HomeModule { }
