import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore' ;
import {Customer} from '../models/customer';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  customersCollection:AngularFirestoreCollection<Customer>;
  customers:Observable<Customer[]>;

  constructor(public afs:AngularFirestore) {
    this.customersCollection=this.afs.collection('customers');
  }

   getCustomers(){
     return this.afs.collection('customers', ref => ref.orderBy('distance', 'desc')).snapshotChanges();
   }

   getDistance(customerID){
    return this.afs.collection('customers', ref => ref.where('customer_id', '==', customerID)).snapshotChanges();
  }

   getspcustomer(custID){
    return this.afs.collection('customers',  ref => ref.where('customer_id', '==', custID));

  }

   addCustomer(customer:Customer){
    this.customersCollection.add(customer);
   }

}

