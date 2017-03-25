import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RepertuarComponent } from './repertuar/repertuar.component';
import { RepertuarMainComponent } from './repertuar_main/repertuar_main.component';
import { RepertuarBilgiComponent } from './repertuar_bilgi/repertuar_bilgi.component';
import { SarkiEkleComponent } from './sarki_ekle/sarki_ekle.component';
import { RepertuarDuzenleComponent } from './repertuar_duzenle/repertuar_duzenle.component';
import { SarkiSozuComponent } from './sarki_sozu/sarki_sozu.component';
import { AkorComponent } from './akor/akor.component';
import { NotaComponent } from './nota/nota.component';

export const routes: Routes = [
  {
    path: 'repertuar', component: RepertuarMainComponent, children: [
      { path: 'repertuarlar', component: RepertuarComponent },
      { path: ':repertuarName/sarki_ekle', component: SarkiEkleComponent },
      { path: ':repertuarName/repertuar_duzenle', component: RepertuarDuzenleComponent },
      {path: ':repertuarName/bilgi', component: RepertuarBilgiComponent, children: [
          { path: 'sarki_sozu', component: SarkiSozuComponent },
          { path: 'akor', component: AkorComponent },
          { path: 'nota', component: NotaComponent }
        ]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RepertuarRoutingModule { }
