import { Injectable, Inject, OnInit}     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { AngularFire, FirebaseListObservable, FirebaseRef} from 'angularfire2';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Injectable()
export class RepertuarListService {
    private _repertuarlist=[];
    get RepertuarList(){
        return this._repertuarlist;
    }
    set RepertuarList(allRepertuarList){
        this._repertuarlist=allRepertuarList;
    }

    private _repertuarcontent=[];
    get RepertuarContent(){
        return this._repertuarcontent;
    }
    set RepertuarContent(allRepertuarContent){
        this._repertuarcontent=allRepertuarContent;
    }
    constructor(  private http: Http, af: AngularFire,private router: Router,private route: ActivatedRoute,) {
        this.RepertuarList=[
            {repertuar_name:'Repertuar Adı 1', repertuar_description:'Repertuar Açıklaması 1'},
            {repertuar_name:'Repertuar Adı 2', repertuar_description:'Repertuar Açıklaması 2'},
            {repertuar_name:'Repertuar Adı 3', repertuar_description:'Repertuar Açıklaması 3'},
            {repertuar_name:'Repertuar Adı 4', repertuar_description:'Repertuar Açıklaması 4'}
        ]

        this.RepertuarContent=[
            {music_number:'1', artist_name:'Seçilmiş Sanatçı Adı 1', song_name:'Seçilmiş Şarkı Adı 1'},
            {music_number:'2', artist_name:'Seçilmiş Sanatçı Adı 2', song_name:'Seçilmiş Şarkı Adı 2'},
            {music_number:'3', artist_name:'Seçilmiş Sanatçı Adı 3', song_name:'Seçilmiş Şarkı Adı 3'},
            {music_number:'4', artist_name:'Seçilmiş Sanatçı Adı 4', song_name:'Seçilmiş Şarkı Adı 4'},
            {music_number:'5', artist_name:'Seçilmiş Sanatçı Adı 5', song_name:'Seçilmiş Şarkı Adı 5'},
            {music_number:'6', artist_name:'Seçilmiş Sanatçı Adı 6', song_name:'Seçilmiş Şarkı Adı 6'},
            {music_number:'7', artist_name:'Seçilmiş Sanatçı Adı 7', song_name:'Seçilmiş Şarkı Adı 7'},
            {music_number:'8', artist_name:'Seçilmiş Sanatçı Adı 8', song_name:'Seçilmiş Şarkı Adı 8'},
            {music_number:'9', artist_name:'Seçilmiş Sanatçı Adı 9', song_name:'Seçilmiş Şarkı Adı 9'},
            {music_number:'10', artist_name:'Seçilmiş Sanatçı Adı 10', song_name:'Seçilmiş Şarkı Adı 10'},
            {music_number:'11', artist_name:'Seçilmiş Sanatçı Adı 11', song_name:'Seçilmiş Şarkı Adı 11'},
            {music_number:'12', artist_name:'Seçilmiş Sanatçı Adı 12', song_name:'Seçilmiş Şarkı Adı 12'},
            {music_number:'13', artist_name:'Seçilmiş Sanatçı Adı 13', song_name:'Seçilmiş Şarkı Adı 13'},
            {music_number:'14', artist_name:'Seçilmiş Sanatçı Adı 14', song_name:'Seçilmiş Şarkı Adı 14'}
        ]
    }
}