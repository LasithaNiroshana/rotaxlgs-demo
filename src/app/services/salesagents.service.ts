import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore' ;
import {Salesagent} from '../../app/models/salesagents';

@Injectable({
  providedIn: 'root'
})
export class SalesagentsService {
  salesagentsCollection: AngularFirestoreCollection<Salesagent>;
  salesagents: Observable<Salesagent[]>;

  constructor(public afs: AngularFirestore) {
    this.salesagentsCollection = this.afs.collection('salesagents');
  }

  // tslint:disable-next-line: typedef
  getSalesagents(){
    return this.afs.collection('salesagents').snapshotChanges();
  }

  getInSAgent(sa_ID){
    return this.afs.collection('salesagents',  ref => ref.where('employee_id', '==', sa_ID));
  }

  // tslint:disable-next-line: typedef
  addSalesAgent(salesAgent: Salesagent){
    this.salesagentsCollection.add(salesAgent);
  }
}
