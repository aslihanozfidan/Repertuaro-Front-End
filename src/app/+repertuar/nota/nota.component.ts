import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'nota',
    templateUrl: './nota.component.html',
    styleUrls: ['./nota.component.scss'],
    providers: []
})

export class NotaComponent implements OnInit, OnDestroy {
   
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