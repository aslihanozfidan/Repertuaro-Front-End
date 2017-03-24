import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SongListComponent } from './song_list/song_list.component';

export const routes: Routes = [
  { path: 'liste', component: SongListComponent}  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SongListRoutingModule { }
