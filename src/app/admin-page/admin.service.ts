import { Injectable } from '@angular/core';
import {AngularFire, AuthProviders, AuthMethods, FirebaseListObservable} from 'angularfire2';
@Injectable()

export class AdminService {
  public customers: FirebaseListObservable<any>;
  public users: FirebaseListObservable<any>;

  constructor(public af: AngularFire) {
    this.customers = this.af.database.list('customers');
  }

  saveCustomer(uid, name, email) {
    return this.af.database.object('customers/' + uid).set({
      name: name,
      email: email,
    });
  }

}
