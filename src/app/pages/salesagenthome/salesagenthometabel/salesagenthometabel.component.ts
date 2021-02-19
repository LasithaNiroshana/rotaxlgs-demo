import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/models/order';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-salesagenthometabel',
  templateUrl: './salesagenthometabel.component.html',
  styleUrls: ['./salesagenthometabel.component.scss']
})
export class SalesagenthometabelComponent implements OnInit {
  status:'';
  orders:Order[];
  ordercolumns:string[]=['order_date','invoice_no','customer_name','address','city','province','route','sales_agent','status','edit'];
  // user: firebase.User;
  constructor(private ordersservice:OrdersService,
              private router:Router,
              private route:ActivatedRoute,
              private fireAuth: AngularFireAuth,
              private afs:AngularFirestore) {
   }
   ngOnInit(): void {
    this.ordersservice.getOrders().subscribe(order=>{
      this.orders=[];
      order.forEach(o=>{
        let ordes:any = o.payload.doc.data();
        ordes.id = o.payload.doc.id;
        this.orders.push(ordes);
      })
    });
  }
  



}
