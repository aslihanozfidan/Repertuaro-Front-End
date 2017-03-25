import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { AppRoutingModule } from './app.routing';
import { IndexModule } from './index/index.module';
import { firebaseConfig } from './config/firebase-config';
import { UsersService } from './services/users.service';
import { AppComponent } from './app.component';
import { RepertuarModule } from './+repertuar/repertuar.module';
import { HomeModule } from './+home/home.module';
import { ForgetModule } from './+forget/forget.module';
import { RegisterModule } from './+register/register.module';
import { SongListModule } from './+song_list/song_list.module';
import { ProfileModule } from './+profile/profile.module';
import { BildirimModule } from './+bildirim/bildirim.module';

// app main bootstrap
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AppRoutingModule,
    IndexModule,
    RepertuarModule,
    HomeModule,
    ForgetModule,
    RegisterModule,
    ProfileModule,
    SongListModule,
    BildirimModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
