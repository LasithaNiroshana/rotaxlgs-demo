import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore' ;
import {Vehicle} from '../models/vehicles';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {
  vehiclesCollection:AngularFirestoreCollection<Vehicle>;
  vehicles:Observable<Vehicle[]>;

  constructor(public afs:AngularFirestore) {
    this.vehiclesCollection=this.afs.collection('vehicles');
  }

  getVehicles(){
    return this.afs.collection('vehicles').snapshotChanges();
  }
  addVehicle(vehicle:Vehicle){
    this.vehiclesCollection.add(vehicle);
  }
}
