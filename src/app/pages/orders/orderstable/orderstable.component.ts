import { Component, OnInit } from '@angular/core';
import {OrdersService} from '../../../services/orders.service';
import {Order} from '../../../models/order';
import { DisroutsService } from 'src/app/services/disroutes.service';
import { Disroute } from 'src/app/models/disroutes';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-orderstable',
  templateUrl: './orderstable.component.html',
  styleUrls: ['./orderstable.component.scss']
})
export class OrderstableComponent implements OnInit {
  routes:Disroute[];
  orders:Order[];
  ordercolumns:string[]=['order_date','invoice_no','customer_name','address','city','distance','route','sales_agent','status','edit','delete'];
  constructor(private ordersservice:OrdersService,
    private routeService: DisroutsService,
    private customerService: CustomersService) {
   }

   ngOnInit(): void {
    this.ordersservice.getOrders().subscribe(order=>{
      this.orders=[];
      order.forEach(o=>{
        let ordes:any = o.payload.doc.data();
        ordes.id = o.payload.doc.id;
        this.route(ordes.city,ordes.id)
        this.distance(ordes.customer_id,ordes.id)
        this.orders.push(ordes);
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

  }


