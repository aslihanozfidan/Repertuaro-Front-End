import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import {SharedModule} from '../shared/shared.module';

import { ProfileRoutingModule } from './profile.routing';

import { ProfileComponent } from './profile/profile.component';
import { ProfileInfoComponent } from './profile_info/profile_info.component';
import { ChangePasswordComponent } from './change_password/change_password.component';
import { MessageComponent } from './message/message.component';

// dost module bootstrap
@NgModule({
  imports: [
    ProfileRoutingModule,
    MaterialModule.forRoot(),
    CommonModule,
    SharedModule
  ],
  exports: [],
  declarations: [ ProfileComponent, ProfileInfoComponent, ChangePasswordComponent, MessageComponent],
  providers: [],
})
export class ProfileModule { }
