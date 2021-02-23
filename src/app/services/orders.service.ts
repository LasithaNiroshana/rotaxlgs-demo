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
  id:''
  constructor(public afs:AngularFirestore,
    ) {
      // private edit: EditpopupComponent
    // this.afs.collection('orders').snapshotChanges().subscribe(orders=>console.log(orders));
    this.ordersCollection=this.afs.collection('orders');
   }

   getOrders(){
     return this.afs.collection('orders', ref => ref.orderBy('distance', 'desc')).snapshotChanges();
   }

   getDashOrders(){
    return this.afs.collection('orders', ref =>ref.where('status', '!=', 'Delivered')).snapshotChanges();
  }

   getDOrders(){
    return this.afs.collection('orders', ref =>ref.where('status', '==', 'Not Delivered')).snapshotChanges();
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

   populateOrder(order){
    this.id = order.id;
    console.log(this.id)
    //  this.edit.onSubmit(order.status, order.id);
   }

  update(status){
    this.afs.collection('orders').doc(this.id).update({'status': status})
  }

   addOrder(order:Order){
     this.ordersCollection.add(order);
   }

   updatefrmDriver(status){
    this.afs.collection('orders').doc(this.id).update({'status': status})
   }

  //  update(order){
  //    console.log(status)
  //    console.log(order[1].id)
  //   this.afs.doc(`orders/${order[1].id}`).update({
  //     status: 'not delivered',
  //   })
  //  }

}
