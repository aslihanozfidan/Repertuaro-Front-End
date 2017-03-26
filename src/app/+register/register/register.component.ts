import { Component, OnInit, OnDestroy  } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
    providers:[]
})

export class RegisterComponent implements OnInit,OnDestroy  {
    private commentsUrl = 'api';
    constructor() {
    }
    ngOnDestroy () {
        
    }

    ngOnInit() {
        
    }
     

}