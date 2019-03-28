import {Component, Input, OnInit, Output} from '@angular/core';
import {User} from '../../shared/models/user';
import {ShareDataService} from '../../shared/services/share-data.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  userProfile: User;
  supervisiorProfile: User;

 // constructor(private profileUserService: ProfileUserService) { }
  constructor(private shareDataService: ShareDataService) { }

  ngOnInit() {
      this.shareDataService.currentDataUserProfile.subscribe(userProfile => this.userProfile = userProfile);
    // this.profileUserService.getUserProfile().subscribe(user => this.userProfile = user);
    // this.profileUserService.getSupervisiorProfile().subscribe(supervisior => this.supervisiorProfile = supervisior);
  }

}
