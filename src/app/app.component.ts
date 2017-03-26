import { Component, OnInit, ViewChild,OnDestroy,HostListener } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { HomeComponent } from './+home/home/home.component';
import { RepertuarComponent } from './+repertuar/repertuar/repertuar.component';

import { ForgetComponent } from './+forget/forget/forget.component';
import { RegisterComponent } from './+register/register/register.component';
import { SongListComponent } from './+song_list/song_list/song_list.component';
import { ProfileComponent } from './+profile/profile/profile.component';
declare var PouchDB: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

// App component initilization with OnInit and OnDestroy life cycle callbacks
export class AppComponent implements OnInit,OnDestroy { 
  goster:boolean;
  title = 'app works!';
  localUser:any;
  db:any;
  homePageUrl="/home";
  forgotPageUrl="/sifremiunuttum";
  registerPageUrl="/uyeol";
  private url;
  private user;
  private sList;
  @ViewChild('start') start;
  
  // window resize check for the device dimenions
  @HostListener('window:resize', ['$event'])  onResize(event) {
  
  }

  constructor(private route: ActivatedRoute,
        private router: Router){
    this.db = new PouchDB("sList");
  }
 

  
  isMobile;

  // called on component creation
  ngOnInit() {
           
  }
 
  ngOnDestroy(){
  }

  
}






