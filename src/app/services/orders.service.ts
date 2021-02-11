import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore' ;
import {Order} from '../models/order';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  ordersCollection:AngularFirestoreCollection<Order>;
  orders:Observable<Order[]>;

  constructor(public afs:AngularFirestore) {
    this.orders=this.afs.collection('orders').valueChanges();
    // this.afs.collection('orders').snapshotChanges().subscribe(orders=>console.log(orders));
    this.ordersCollection=this.afs.collection('orders');
   }

   getOrders(){
     return this.orders;
   }

   addOrder(order:Order){
     this.ordersCollection.add(order);
   }
}
