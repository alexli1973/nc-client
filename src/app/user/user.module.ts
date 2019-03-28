import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatChipsModule} from '@angular/material/chips';
import {MatButtonToggleModule} from '@angular/material/button-toggle';


import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { SupervisorProfileComponent } from './supervisor-profile/supervisor-profile.component';
import {UserProfileComponent} from './user-profile/user-profile.component';

@NgModule({
  declarations: [UserComponent,
    SupervisorProfileComponent,
    UserProfileComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatChipsModule,
    MatButtonToggleModule
  ]
})
export class UserModule { }
