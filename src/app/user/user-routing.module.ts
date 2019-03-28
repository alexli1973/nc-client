import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {SupervisorProfileComponent} from './supervisor-profile/supervisor-profile.component';
import {UserComponent} from './user.component';

const routes: Routes = [
  {path: '', component: UserComponent,
  children: [
    {path: 'user/my-account', component: UserProfileComponent},
    {path: 'user/supervisor', component: SupervisorProfileComponent}
  ]},
  // {path: 'user/my-account', component: UserProfileComponent},
  // {path: 'user/supervisor', component: SupervisorProfileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
