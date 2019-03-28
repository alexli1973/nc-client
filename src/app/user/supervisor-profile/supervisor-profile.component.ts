import { Component, OnInit } from '@angular/core';
import {ShareDataService} from '../../shared/services/share-data.service';
import {User} from '../../shared/models/user';

@Component({
  selector: 'app-supervisor-profile',
  templateUrl: './supervisor-profile.component.html',
  styleUrls: ['./supervisor-profile.component.scss']
})
export class SupervisorProfileComponent implements OnInit {
  supervisiorProfile: User;

  constructor( private shareDataService: ShareDataService ) { }

  ngOnInit() {
    this.shareDataService.currentDataSupervisorProfile.subscribe(supervisiorProfile => this.supervisiorProfile = supervisiorProfile);
  }

}
