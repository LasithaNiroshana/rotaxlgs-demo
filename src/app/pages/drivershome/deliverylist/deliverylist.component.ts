import { Component, OnInit } from '@angular/core';
import {OrdersService} from '../../../services/orders.service';

@Component({
  selector: 'app-deliverylist',
  templateUrl: './deliverylist.component.html',
  styleUrls: ['./deliverylist.component.scss']
})
export class DeliverylistComponent implements OnInit {
  orders=[];
  ordercolumns:string[]=['order_date','invoice_no','customer_name','address','city','province','route','sales_agent','status','edit','delete'];
  constructor(private ordersService:OrdersService) { }

  ngOnInit(): void {
    this.ordersService.getOrders().subscribe(ord=>{
      this.orders=[];
      ord.forEach(o=>{
        let order:any=o.payload.doc.data();
        order.id=o.payload.doc.id;
        this.orders.push(order);
        console.log(order.id);
      });
    });
  }

}
