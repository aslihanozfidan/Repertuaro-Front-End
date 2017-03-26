import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import {SharedModule} from '../shared/shared.module';

import { RepertuarRoutingModule } from './repertuar.routing';
import { RepertuarComponent } from './repertuar/repertuar.component';
import { RepertuarBilgiComponent } from './repertuar_bilgi/repertuar_bilgi.component';
import { RepertuarMainComponent } from './repertuar_main/repertuar_main.component';
import { SarkiEkleComponent } from './sarki_ekle/sarki_ekle.component';
import { RepertuarDuzenleComponent } from './repertuar_duzenle/repertuar_duzenle.component';
import { SarkiSozuComponent } from './sarki_sozu/sarki_sozu.component';
import { AkorComponent } from './akor/akor.component';
import { NotaComponent } from './nota/nota.component';

import { RepertuarListService } from './repertuar.service';

// repertuar module bootstrap
@NgModule({
  imports: [
    RepertuarRoutingModule,
    MaterialModule.forRoot(),
    CommonModule,
    SharedModule
  ],
  exports: [],
  declarations: [RepertuarComponent, SarkiEkleComponent, 
  RepertuarMainComponent,RepertuarBilgiComponent, 
  RepertuarDuzenleComponent, SarkiEkleComponent,
  SarkiSozuComponent, NotaComponent, AkorComponent],
  providers: [RepertuarListService],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
]
})
export class RepertuarModule { }
