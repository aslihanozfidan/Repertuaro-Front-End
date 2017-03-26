import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import {SharedModule} from '../shared/shared.module';

import { SongListRoutingModule } from './song_list.routing';
import { SongListComponent } from './song_list/song_list.component';
import { SongListService } from './song_list.service';

// song module bootstrap
@NgModule({
  imports: [
    SongListRoutingModule,SharedModule,
    MaterialModule.forRoot(),
    CommonModule
  ],
  exports: [],
  declarations: [SongListComponent],
  providers: [SongListService],
})
export class SongListModule { }
