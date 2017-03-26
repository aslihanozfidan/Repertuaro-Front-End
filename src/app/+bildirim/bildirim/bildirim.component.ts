import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
    selector: 'bildirim',
    templateUrl: './bildirim.component.html',
    styleUrls: ['./bildirim.component.scss'],
    providers: []
})

export class BildirimComponent implements OnInit, OnDestroy {
   
   
    private commentsUrl = 'api';
    constructor(private route: ActivatedRoute,private router: Router) {
    }
    ngOnDestroy() {

    }

    ngOnInit() {
      
    }


}