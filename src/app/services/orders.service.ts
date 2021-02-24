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
//Get all the invoices ordered by customer distance
   getOrders(){
     return this.afs.collection('orders', ref => ref.orderBy('distance', 'desc')).snapshotChanges();
   }
//Get the number of active invoices to the dashboard
   getDashOrders(){
    return this.afs.collection('orders', ref =>ref.where('status', '==', 'Delivered')).snapshotChanges();
  }
  //Get the number of active invoices left
   getDOrders(){
    return this.afs.collection('orders', ref =>ref.where('status', '==', 'Not Delivered')).snapshotChanges();
  }

   getspOrder(invoice_no){
    return this.afs.collection('orders',  ref => ref.where('invoice_no', '==', invoice_no));
  }
//Get all the invoices under salesagents
  getSAOrder(name){
    return this.afs.collection('orders',  ref => ref.where('sales_agent', '==', name)).snapshotChanges();
  }
//Get all the invoices under each route
   getOrder(route){
     return this.afs.collection('orders',  ref => ref.where('route', '==', route));
   }
//for popups
   populateOrder(order){
    this.id = order.id;
    console.log(this.id)
    //  this.edit.onSubmit(order.status, order.id);
   }
//status update
  update(status){
    this.afs.collection('orders').doc(this.id).update({'status': status})
  }
//add invoices form
   addOrder(order:Order){
     this.ordersCollection.add(order);
   }
//update status and the photo of the invoice
   updatefrmDriver(status,url){
    this.afs.collection('orders').doc(this.id).update({'status': status})
    this.afs.collection('orders').doc(this.id).update({'photo_URL': url})
   }



}
