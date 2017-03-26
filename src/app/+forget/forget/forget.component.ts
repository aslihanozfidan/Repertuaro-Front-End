import { Component, OnInit, OnDestroy  } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'forget',
    templateUrl: './forget.component.html',
    styleUrls: ['./forget.component.scss'],
    providers:[]
})

export class ForgetComponent implements OnInit,OnDestroy  {
    private commentsUrl = 'api';
    constructor() {
    }
    ngOnDestroy () {
        
    }

    ngOnInit() {
        
    }
     

}