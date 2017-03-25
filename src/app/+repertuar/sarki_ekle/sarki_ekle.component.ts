import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, Params } from '@angular/router';

// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';

import { SharedComponent } from './../../shared/shared.component';
import { UsersService } from './../../services/users.service';
import { user } from './../../model/user';

import { RepertuarModule } from '../repertuar.module';

@Component({
    selector: 'sarki_ekle',
    templateUrl: './sarki_ekle.component.html',
    styleUrls: ['./sarki_ekle.component.scss'],
    providers: [UsersService]
})

export class SarkiEkleComponent implements OnInit, OnDestroy {
      
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