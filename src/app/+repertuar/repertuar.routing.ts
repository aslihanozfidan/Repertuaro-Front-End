import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RepertuarComponent } from './repertuar/repertuar.component';
import { RepertuarMainComponent } from './repertuar_main/repertuar_main.component';
import { DurumComponent } from './durum/durum.component';
export const routes: Routes = [
  { path: 'repertuar/:repertuarName', component: RepertuarComponent, children: [
    { path: 'bilgi', component: RepertuarMainComponent},
    { path: 'durum', component: DurumComponent }
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RepertuarRoutingModule { }
