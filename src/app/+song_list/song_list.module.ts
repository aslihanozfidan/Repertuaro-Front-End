import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { SongListRoutingModule } from './song_list.routing';
import { SharedModule } from './../shared/shared.module';
import { SongListComponent } from './song_list/song_list.component';
import { UsersService } from './../services/users.service';

// song module bootstrap
@NgModule({
  imports: [
    SongListRoutingModule,SharedModule,
    MaterialModule.forRoot(),
    CommonModule
  ],
  exports: [],
  declarations: [SongListComponent],
  providers: [UsersService],
})
export class SongListModule { }
