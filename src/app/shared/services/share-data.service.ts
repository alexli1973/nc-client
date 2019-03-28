import { Injectable } from '@angular/core';
import {User} from '../models/user';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  private userProfile = new BehaviorSubject<any>({});
  currentDataUserProfile = this.userProfile.asObservable();

  private supervisorProfile = new BehaviorSubject<any>({});
  currentDataSupervisorProfile = this.supervisorProfile.asObservable();

  constructor() { }

  changeUserProfile(data: User) {
    this.userProfile.next(data);
  }

  changeSupervisorProfile(data: User) {
    this.supervisorProfile.next(data);
  }
}
