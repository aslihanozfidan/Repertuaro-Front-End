import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { RepertuarListService } from '../repertuar.service';

@Component({
    selector: 'repertuar_bilgi',
    templateUrl: './repertuar_bilgi.component.html',
    styleUrls: ['./repertuar_bilgi.component.scss'],
    providers: []
})

export class RepertuarBilgiComponent implements OnInit, OnDestroy {
   
    private commentsUrl = 'api';
    repertuarcontent=[];
    constructor(private route: ActivatedRoute,private router: Router, repertuarlistService:RepertuarListService) {
        this.repertuarcontent=repertuarlistService.RepertuarContent;
    }
    ngOnDestroy() {

    }

    ngOnInit() {
     
    }


}