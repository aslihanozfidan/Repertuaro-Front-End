import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'profile_info',
    templateUrl: './profile_info.component.html',
    styleUrls: ['./profile_info.component.scss'],
    providers: []
})

export class ProfileInfoComponent implements OnInit, OnDestroy {
   
   
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