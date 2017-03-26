import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'repertuar_duzenle',
    templateUrl: './repertuar_duzenle.component.html',
    styleUrls: ['./repertuar_duzenle.component.scss'],
    providers: []
})

export class RepertuarDuzenleComponent implements OnInit, OnDestroy {
   
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