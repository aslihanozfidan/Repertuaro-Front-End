import { Component, OnInit, OnDestroy, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { RepertuarModule } from '../repertuar.module';

@Component({
    selector: 'sarki_ekle',
    templateUrl: './sarki_ekle.component.html',
    styleUrls: ['./sarki_ekle.component.scss'],
    providers: []
})

export class SarkiEkleComponent implements OnInit, OnDestroy {
      
    private commentsUrl = 'api';
    constructor(
        private route: ActivatedRoute,
        private router: Router) {
    }
    ngOnDestroy() {

    }

    ngOnInit() {
        
    }


}