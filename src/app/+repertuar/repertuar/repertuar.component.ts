import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, Params } from '@angular/router';

import {RepertuarListService} from '../repertuar.service';

@Component({
    selector: 'repertuar',
    templateUrl: './repertuar.component.html',
    styleUrls: ['./repertuar.component.scss'],
    providers: []
})

export class RepertuarComponent implements OnInit, OnDestroy {
    repertuarName="mysongs";
    repertuarEklePageUrl="/repertuarlar/repertuar_ekle";
    private commentsUrl = 'api';
    repertuarlist=[];
    constructor(private route: ActivatedRoute,private router: Router, repertuarlistService:RepertuarListService) {
        this.repertuarlist=repertuarlistService.RepertuarList;
    }
    ngOnDestroy() {

    }

    ngOnInit() {
        this.route.params.subscribe(key => this.repertuarName = key["repertuarName"]);
    }


}