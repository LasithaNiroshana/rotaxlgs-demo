import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore' ;
import {Driver} from '../models/drivers';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DriversService {
  driversCollection:AngularFirestoreCollection<Driver>;
  drivers:Observable<Driver[]>;

  constructor(public afs:AngularFirestore) {
    this.driversCollection=this.afs.collection('drivers');
   }

   getDrivers(){
    return this.afs.collection('drivers').snapshotChanges();
  }

  getspDriver(driverID){
    return this.afs.collection('drivers',  ref => ref.where('employee_id', '==', driverID));
  }

  getUASDriver(driverID){
    return this.afs.collection('drivers',  ref => ref.where('employee_id', '==', driverID).where('assigned', '==', false));
  }

  getUADriver(){
    return this.afs.collection('drivers',  ref => ref.where('assigned', '==', false));
  }

  assignDriver(driver,assigned_route){
    this.afs.collection('drivers').doc().update({'assigned': true,'assigned_route': assigned_route});
  }

  addDriver(driver:Driver){
    this.driversCollection.add(driver);
  }
}
