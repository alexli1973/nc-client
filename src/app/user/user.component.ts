import {Component, OnInit, Output, DoCheck, EventEmitter, AfterContentInit, AfterContentChecked} from '@angular/core';
import {User} from '../shared/models/user';
import {ProfileUserService} from '../shared/services/profile-user.service';
import {ShareDataService} from '../shared/services/share-data.service';
import {BehaviorSubject, Observable} from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, DoCheck {
  userProfile: User;
  supervisiorProfile: User;

  constructor(private profileUserService: ProfileUserService,
              private shareDataService: ShareDataService) { }

  ngOnInit() {
    this.profileUserService.getUserProfile().subscribe(user => this.userProfile = user);
    this.profileUserService.getSupervisiorProfile().subscribe(supervisior => this.supervisiorProfile = supervisior);
  }


  ngDoCheck() {
    this.shareDataService.changeUserProfile(this.userProfile);
    this.shareDataService.changeSupervisorProfile(this.supervisiorProfile);
  }

}
