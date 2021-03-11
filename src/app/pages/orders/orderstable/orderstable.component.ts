import { Component, OnInit,ViewChild,TemplateRef} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {MatDialog} from '@angular/material/dialog';
import {OrdersService} from '../../../services/orders.service';
import {Order} from '../../../models/order';
import { DisroutsService } from 'src/app/services/disroutes.service';
import { Disroute } from 'src/app/models/disroutes';
import { CustomersService } from 'src/app/services/customers.service';
import { DltdialogService } from 'src/app/services/dltdialog.service';


@Component({
  selector: 'app-orderstable',
  templateUrl: './orderstable.component.html',
  styleUrls: ['./orderstable.component.scss']
})
export class OrderstableComponent implements OnInit {
  @ViewChild('callEDITDialog') callEDITDialog: TemplateRef<any>;
  @ViewChild('callDLTDialog') callDLTDialog: TemplateRef<any>;
  routes:Disroute[];
  orders:Order[];
  ordercolumns:string[]=['order_date','invoice_no','customer_name','address','city','distance','route','sales_agent','status','view','edit','delete'];
  constructor(private ordersservice:OrdersService,
    private routeService: DisroutsService,
    private customerService: CustomersService, private afs:AngularFirestore,public dialog:MatDialog,
    private dialogService:DltdialogService) {
   }

   ngOnInit(): void {
    this.ordersservice.getOrders().subscribe(ord=>{
      this.orders=[];
      ord.forEach(o=>{
        let order:any = o.payload.doc.data();
        order.id = o.payload.doc.id;
        this.route(order.city,order.id)
        this.distance(order.customer_id,order.id)
        this.orders.push(order);
      })
    });
  }

  route(city,id) {
  this.routeService.getroute(city).snapshotChanges().subscribe(route =>{
  try {
  if(route.length > 0){
   route.forEach(r => {
   let route: any= r.payload.doc.data();
    this.ordersservice.updateRoute(id,route.route_name)
  });
    }}catch(error){
      console.log(error)
    }}
    )}

    distance(customerID,id){
      this.customerService.getDistance(customerID).subscribe(customer=>{
        try{
          if(customer.length>0){
            customer.forEach(c=>{
              let customer:any=c.payload.doc.data();
              this.ordersservice.updateDistance(id,customer.distance)
            });
          }}catch(error){
            console.log(error)
      }
    });
    }

    editOrder(order){
      this.afs.doc(`orders/${order.id}`).update(order);
    }

    deleteOrder(order){
      this.dialogService.openDltDialog().afterClosed().subscribe(res=>{
        if(res){
      this.afs.doc(`orders/${order.id}`).delete();
      alert('Record Deleted Successfully');
    }
  });
    }

    callEditDialog() {
      this.dialog.open(this.callEDITDialog);
    }

    callDialog() {
      this.dialog.open(this.callDLTDialog);
    }

    view(order){
      window.open(order.photo_URL, "_blank");
    }

  }


