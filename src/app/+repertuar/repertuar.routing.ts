import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RepertuarComponent } from './repertuar/repertuar.component';
import { RepertuarMainComponent } from './repertuar_main/repertuar_main.component';
import { RepertuarBilgiComponent } from './repertuar_bilgi/repertuar_bilgi.component';
import { SarkiEkleComponent } from './sarki_ekle/sarki_ekle.component';
export const routes: Routes = [
  { path: 'repertuar', component: RepertuarMainComponent, children: [    
    { path: 'repertuarlar', component: RepertuarComponent},
    { path: ':repertuarName/bilgi', component: RepertuarBilgiComponent},
    { path: ':repertuarName/sarki_ekle', component: SarkiEkleComponent }
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RepertuarRoutingModule { }
