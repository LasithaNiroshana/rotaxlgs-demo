import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Order } from 'src/app/models/order';
import { AuthService } from 'src/app/services/auth.service';
import { OrdersService } from 'src/app/services/orders.service';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-driverlist',
  templateUrl: './driverlist.component.html',
  styleUrls: ['./driverlist.component.scss']
})
export class DriverlistComponent implements OnInit {
  status:'';
  user:firebase.default.User;
  orders:Order[];
  ordercolumns:string[]=['order_date','invoice_no','customer_name','address','city','province','route','driver','current_status','edit'];
  // user: firebase.User;
  userc:any;
  constructor(private ordersservice:OrdersService,
              // private router:Router,
              // private route:ActivatedRoute,
              // private fireAuth: AngularFireAuth,
              private afs:AngularFirestore,
              private dialog: MatDialog,
              private snackBar:MatSnackBar,
              private authService:AuthService
             ) {
   }
   ngOnInit(): void {
    this.authService.getUserState().subscribe(user=>{
      this.user=user;
    this.afs.collection('users').doc(user.uid).valueChanges().subscribe((currentUser:any)=>{
      this.afs.collection('orders', ref =>ref.where('driver_id', '==',currentUser.employee_id)).snapshotChanges().subscribe(
        ord=>{
          this.orders=[];
          ord.forEach(o=>{
            let order:any = o.payload.doc.data();
            order.id = o.payload.doc.id;
            this.orders.push(order);
          })
        }
      );
    });
  });
    // this.ordersservice.getOrders().subscribe(order=>{
    //   this.orders=[];
    //   order.forEach(o=>{
    //     let order:any = o.payload.doc.data();
    //     order.id = o.payload.doc.id;
    //     this.orders.push(order);
    //   })
    // });
  }

  done(orders: { id: string; }){
    this.afs.collection('orders').doc(orders.id).update({'status': this.status});
    this.openSnackBar('Status of the order changed successfully','');
  }

  edit(order){
    this.ordersservice.populateOrder(order);
    this.dialog.open(PopupComponent);
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3200,
    });
  }


}
