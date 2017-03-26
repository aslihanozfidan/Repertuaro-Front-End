import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'akor',
    templateUrl: './akor.component.html',
    styleUrls: ['./akor.component.scss'],
    providers: []
})

export class AkorComponent implements OnInit, OnDestroy {
   
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