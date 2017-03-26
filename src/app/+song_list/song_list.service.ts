import { Injectable, Inject, OnInit}     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { AngularFire, FirebaseListObservable, FirebaseRef} from 'angularfire2';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Injectable()
export class SongListService {
    private _songlist=[];
    get SongList(){
        return this._songlist;
    }
    set SongList(allSongList){
        this._songlist=allSongList;
    }
    constructor(  private http: Http, af: AngularFire,private router: Router,private route: ActivatedRoute,) {
        this.SongList=[
            {artist_name:'Sanatçı1', song_name:'Song1'},
            {artist_name:'Sanatçı2', song_name:'Song2'},
            {artist_name:'Sanatçı3', song_name:'Song3'},
            {artist_name:'Sanatçı4', song_name:'Song4'},
            {artist_name:'Sanatçı5', song_name:'Song5'},
            {artist_name:'Sanatçı6', song_name:'Song6'},
            {artist_name:'Sanatçı7', song_name:'Song7'},
            {artist_name:'Sanatçı8', song_name:'Song8'},
            {artist_name:'Sanatçı9', song_name:'Song9'},
            {artist_name:'Sanatçı10', song_name:'Song10'},
            {artist_name:'Sanatçı11', song_name:'Song11'},
            {artist_name:'Sanatçı12', song_name:'Song12'}
        ]
    }
}