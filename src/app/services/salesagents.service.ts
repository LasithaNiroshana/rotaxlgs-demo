import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore' ;
import {Salesagent} from '../../app/models/salesagents';

@Injectable({
  providedIn: 'root'
})
export class SalesagentsService {
  salesagentsCollection:AngularFirestoreCollection<Salesagent>;
  salesagents:Observable<Salesagent[]>;

  constructor(public afs:AngularFirestore) {
    this.salesagentsCollection=this.afs.collection('salesagents');
  }

  getSalesagents(){
    return this.afs.collection('salesagents').snapshotChanges();
  }
  addSalesAgent(salesAgent:Salesagent){
    this.salesagentsCollection.add(salesAgent);
  }
}
