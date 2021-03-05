import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/models/order';
import { OrdersService } from 'src/app/services/orders.service';
import { MatDialog } from '@angular/material/dialog';
import { EditpopupComponent } from '../editpopup/editpopup.component';
import { AddordersComponent } from '../../orders/addorders/addorders.component';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-salesagenthometabel',
  templateUrl: './salesagenthometabel.component.html',
  styleUrls: ['./salesagenthometabel.component.scss']
})

export class SalesagenthometabelComponent implements OnInit {
  user:firebase.default.User;
  status:'';
  orders:Order[];
  agentName: String;
  ordercolumns:string[]=['order_date','invoice_no','customer_name','address','city','province','route','sales_agent','current_status','edit'];
  // user: firebase.User;
  constructor(private ordersservice:OrdersService,
              // private router:Router,
              // private route:ActivatedRoute,
              // private fireAuth: AngularFireAuth,
              private authService:AuthService,
              private afs:AngularFirestore,
              private dialog: MatDialog,
             ) {
   }
   ngOnInit(): void {
    this.authService.getUserState().subscribe(use=>{
      this.agentName = use.displayName;
      this.ordersservice.getSAOrder(this.agentName).subscribe(order=>{
        this.orders=[];
        order.forEach(o=>{
          let ordes:any = o.payload.doc.data();
          ordes.id = o.payload.doc.id;
          this.orders.push(ordes);
        })
      });
      }); 
  }

  done(orders: { id: string; }){
    this.afs.collection('orders').doc(orders.id).update({'status': this.status});
  }

  edit(order){
    this.ordersservice.populateOrder(order)
    this.dialog.open(EditpopupComponent);
  }
  

}
