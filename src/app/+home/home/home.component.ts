import { Component, OnInit, OnDestroy  } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    providers:[]
})

export class HomeComponent implements OnInit,OnDestroy  {
    private commentsUrl = 'api';
    
    constructor() {
    }
    ngOnDestroy () {
        
    }

    ngOnInit() {
        
    }
     

}