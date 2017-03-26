import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SongListService } from './../song_list.service';

@Component({
    selector: 'song_list',
    templateUrl: './song_list.component.html',
    styleUrls: ['./song_list.component.scss'],
    providers: []
})

export class SongListComponent implements OnInit, OnDestroy {
      SongList=[];
    constructor(private route: ActivatedRoute,private router: Router, songlistService:SongListService) {
        this.SongList=songlistService.SongList;
    }
    ngOnDestroy() {

    }

    ngOnInit() {
      
    }


}