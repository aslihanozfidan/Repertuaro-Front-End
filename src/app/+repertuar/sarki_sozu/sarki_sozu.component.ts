import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'sarki_sozu',
    templateUrl: './sarki_sozu.component.html',
    styleUrls: ['./sarki_sozu.component.scss'],
    providers: []
})

export class SarkiSozuComponent implements OnInit, OnDestroy {
   
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