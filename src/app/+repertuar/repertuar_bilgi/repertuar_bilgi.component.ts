import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, Params } from '@angular/router';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';

import { SharedComponent } from './../../shared/shared.component';
import { UsersService } from './../../services/users.service';
import { user } from './../../model/user';


@Component({
    selector: 'repertuar_bilgi',
    templateUrl: './repertuar_bilgi.component.html',
    styleUrls: ['./repertuar_bilgi.component.scss'],
    providers: [UsersService]
})

export class RepertuarBilgiComponent implements OnInit, OnDestroy {
   
    private commentsUrl = 'api';
    private users: user[];
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        public _userService: UsersService) {
    }
    ngOnDestroy() {

    }

    ngOnInit() {
     
    }


}