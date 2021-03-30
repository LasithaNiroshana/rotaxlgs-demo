import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore' ;
import {Disroute} from '../models/disroutes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisroutsService {
  routeCollection:AngularFirestoreCollection<Disroute>;
  disroute:Observable<Disroute[]>;

  constructor(public afs:AngularFirestore) {
    this.routeCollection=this.afs.collection('routes');
   }

   getRoutes(){
    return this.afs.collection('routes').snapshotChanges();
  }

  getUARoutes(){
    return this.afs.collection('routes',  ref => ref.where('driver', '==', "")).snapshotChanges();
  }

  getroute(city){
    return this.afs.collection('routes',  ref => ref.where('cities', 'array-contains', city));
   }

   addDisroutes(disroute:Disroute){
    this.routeCollection.add(disroute);
  }

  updatePerson(disroute, name){
    this.afs.collection('routes').doc(disroute.id).update({'driver': name});
  }

}
