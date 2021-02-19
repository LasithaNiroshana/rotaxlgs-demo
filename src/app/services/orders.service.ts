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
     return this.afs.collection('orders').snapshotChanges();
   }

   getspOrder(invoice_no){
    return this.afs.collection('orders',  ref => ref.where('invoice_no', '==', invoice_no));
  }

  getSAOrder(name){
    return this.afs.collection('orders',  ref => ref.where('sales_agent', '==', name));
  }

   getOrder(route){
     return this.afs.collection('orders',  ref => ref.where('route', '==', route));
   }


   addOrder(order:Order){
     this.ordersCollection.add(order);
   }

  //  update(order){
  //    console.log(status)
  //    console.log(order[1].id)
  //   this.afs.doc(`orders/${order[1].id}`).update({
  //     status: 'not delivered',
  //   })
  //  }

}
