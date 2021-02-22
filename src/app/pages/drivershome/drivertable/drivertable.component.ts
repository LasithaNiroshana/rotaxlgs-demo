import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { Order } from 'src/app/models/order';
import { OrdersService } from 'src/app/services/orders.service';
import { DriverpopupComponent } from '../driverpopup/driverpopup.component';

@Component({
  selector: 'app-drivertable',
  templateUrl: './drivertable.component.html',
  styleUrls: ['./drivertable.component.scss']
})
export class DrivertableComponent implements OnInit {
  status:'';
  orders:Order[];
  ordercolumns:string[]=['order_date','invoice_no','customer_name','address','city','province','route','sales_agent','current_status','edit'];
  // user: firebase.User;
  constructor(private ordersservice:OrdersService,
              // private router:Router,
              // private route:ActivatedRoute,
              // private fireAuth: AngularFireAuth,
              private afs:AngularFirestore,
              private dialog: MatDialog,
             ) {
   }
   ngOnInit(): void {
    this.ordersservice.getOrders().subscribe(order=>{
      this.orders=[];
      order.forEach(o=>{
        let orders:any = o.payload.doc.data();
        orders.id = o.payload.doc.id;
        this.orders.push(orders);
      })
    });
  }

  done(orders: { id: string; }){
    this.afs.collection('orders').doc(orders.id).set({'status': this.status});
  }

  edit(order){
    this.ordersservice.populateOrder(order)
    this.dialog.open(DriverpopupComponent);
  }
}