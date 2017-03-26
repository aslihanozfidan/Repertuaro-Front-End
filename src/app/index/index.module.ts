import { NgModule } from '@angular/core';
import {SharedModule} from '../shared/shared.module';

import { IndexRoutingModule } from './index.routing';
import { IndexComponent }   from './index.component';


// index module bootstrapping
@NgModule({
  imports: [
    IndexRoutingModule,SharedModule
  ],
  exports: [],
  declarations: [IndexComponent]
})
export class IndexModule { }
