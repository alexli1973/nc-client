import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {User} from '../models/user';
import {share} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class ProfileUserService {

  BASE_URL = '/app/site/hosting/scriptlet.nl?script=183&deploy=1&compid=TSTDRV1939751&h=c76cac85b609de4179e2&method_name=';
  userId = 38;
  userData: Observable<any> ;


  constructor(private http: HttpClient) { }

  getSupervisiorProfile(): Observable<any> {
   // return this.http.get('/app/site/hosting/scriptlet.nl?script=183&deploy=1&compid=TSTDRV1939751&h=c76cac85b609de4179e2&method_name=get_employee_data&customer_id=38');
    return this.http.get(this.BASE_URL + 'get_employee_data' + '&customer_id=' + this.userId);
  }

  getUserProfile(): Observable<any> {
   // return this.http.get('/app/site/hosting/scriptlet.nl?script=183&deploy=1&compid=TSTDRV1939751&h=c76cac85b609de4179e2&method_name=get_customer_data&customer_id=' + this.userId);
    // return this.http.get(this.BASE_URL + 'get_customer_data' + '&customer_id=' + this.userId);
    if (this.userData) {
      return this.userData;
    } else {
      this.userData = this.http.get(this.BASE_URL + 'get_customer_data' + '&customer_id=' + this.userId).pipe(share());
      return this.userData;
    }
  }
}
