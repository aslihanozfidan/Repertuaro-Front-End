import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import {SharedModule} from '../shared/shared.module';

import { BildirimRoutingModule } from './bildirim.routing';
import { BildirimComponent } from './bildirim/bildirim.component';

// dost module bootstrap
@NgModule({
  imports: [
    BildirimRoutingModule,
    MaterialModule.forRoot(),
    CommonModule,
    SharedModule
  ],
  exports: [],
  declarations: [BildirimComponent],
  providers: [],
})
export class BildirimModule { }
