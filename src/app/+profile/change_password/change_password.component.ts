import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'change_password',
    templateUrl: './change_password.component.html',
    styleUrls: ['./change_password.component.scss'],
    providers: []
})

export class ChangePasswordComponent implements OnInit, OnDestroy {
   
   
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