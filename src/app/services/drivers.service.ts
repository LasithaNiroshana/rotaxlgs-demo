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
    this.drivers=this.afs.collection('drivers').valueChanges();
    this.driversCollection=this.afs.collection('drivers');
   }

   getDrivers(){
    return this.drivers;
  }

  addDriver(driver:Driver){
    this.driversCollection.add(driver);
  }
}
