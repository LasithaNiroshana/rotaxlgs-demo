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
    this.disroute=this.afs.collection('routes').valueChanges();
    this.routeCollection=this.afs.collection('routes');
   }

   getRoutes(){
    return this.disroute;
  }

   addDisroutes(disroute:Disroute){
    this.routeCollection.add(disroute);
  }

}
