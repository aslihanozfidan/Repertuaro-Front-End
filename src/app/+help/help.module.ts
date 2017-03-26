import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module';

import { HelpRoutingModule } from './help.routing';
import { HelpComponent } from './help.component';

// help module bootstrap
@NgModule({
  imports: [
    HelpRoutingModule,CommonModule,SharedModule
  ],
  exports: [],
  declarations: [HelpComponent],
  providers: [],
})
export class HelpModule { }
