import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
    providers: []
})

export class ProfileComponent implements OnInit, OnDestroy {
   
   
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