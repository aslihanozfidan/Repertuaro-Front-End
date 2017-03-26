import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'repertuar_main',
    templateUrl: './repertuar_main.component.html',
    styleUrls: ['./repertuar_main.component.scss'],
    providers: []
})

export class RepertuarMainComponent implements OnInit, OnDestroy {
    
   
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