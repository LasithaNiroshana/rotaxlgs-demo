import { Component, OnInit } from '@angular/core';
import {OrdersService} from '../../../services/orders.service';
import {Order} from '../../../models/order';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-drdeliverylist',
  templateUrl: './drdeliverylist.component.html',
  styleUrls: ['./drdeliverylist.component.scss']
})
export class DrdeliverylistComponent implements OnInit {
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
        console.log(this.orders)
      })
    });
  }
}

