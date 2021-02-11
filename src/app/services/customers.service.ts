import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore' ;
import {Customer} from '../models/customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  customersCollection:AngularFirestoreCollection<Customer>;
  customers:Observable<Customer[]>;

  constructor(public afs:AngularFirestore) {
    // this.customers=this.afs.collection('customers').valueChanges();
    this.customersCollection=this.afs.collection('customers');
  }

  //  getCustomers(){
  //    return this.customers;
  //  }

   getCustomers(){
     return this.afs.collection('customers').snapshotChanges();
   }

   addCustomer(customer:Customer){
this.customersCollection.add(customer);
   }

   deleteCustomer(){
     this.customersCollection;
   }
}

