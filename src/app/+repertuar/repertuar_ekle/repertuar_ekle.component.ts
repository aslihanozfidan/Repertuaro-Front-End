import { Component, OnInit, OnDestroy, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, Params } from '@angular/router';

// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';

import { SharedComponent } from './../../shared/shared.component';
import { UsersService } from './../../services/users.service';
import { user } from './../../model/user';

import { RepertuarModule } from '../repertuar.module';

@Component({
    selector: 'repertuar_ekle',
    templateUrl: './repertuar_ekle.component.html',
    styleUrls: ['./repertuar_ekle.component.scss'],
    providers: [UsersService]
})

export class RepertuarEkleComponent implements OnInit, OnDestroy {
      
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