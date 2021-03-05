import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { Order } from 'src/app/models/order';
import { AuthService } from 'src/app/services/auth.service';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-store-table',
  templateUrl: './store-table.component.html',
  styleUrls: ['./store-table.component.scss']
})
export class StoreTableComponent implements OnInit {
  @ViewChild('updateStatus') updateStatus: TemplateRef<any>;
  
  user:firebase.default.User;
  status:'';
  orders:Order[];
  agentName: String
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
    this.authService.getUserState().subscribe(user=>{
      this.user=user;
      this.agentName = user.displayName});
    this.ordersservice.getSAOrder(this.agentName).subscribe(order=>{
      this.orders=[];
      order.forEach(o=>{
        let orders:any = o.payload.doc.data();
        orders.id = o.payload.doc.id;
        this.orders.push(orders);
      })
    });
   
  }

  callUpdate() {
    this.dialog.open(this.updateStatus);
  }

  done(orders: { id: string; }){
    this.afs.collection('orders').doc(orders.id).update({'status': this.status});
  }


}
