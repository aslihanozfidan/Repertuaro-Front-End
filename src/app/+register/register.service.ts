import { Injectable, Inject, OnInit}     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { AngularFire, FirebaseListObservable, FirebaseRef} from 'angularfire2';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Injectable()
export class RegisterService {
    private _register=[];
    get Register(){
        return this._register;
    }
    set Register(allRegister){
        this._register=allRegister;
    }
    constructor(  private http: Http, af: AngularFire,private router: Router,private route: ActivatedRoute,) {
        this.Register=[
            {artist_name:'Sanatçı1', song_name:'Song1'},
            
        ]
    }
}