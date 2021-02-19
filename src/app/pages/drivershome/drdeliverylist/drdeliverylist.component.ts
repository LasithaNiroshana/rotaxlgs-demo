import { Component, OnInit } from '@angular/core';
import {OrdersService} from '../../../services/orders.service';
import {Order} from '../../../models/order';

@Component({
  selector: 'app-drdeliverylist',
  templateUrl: './drdeliverylist.component.html',
  styleUrls: ['./drdeliverylist.component.scss']
})
export class DrdeliverylistComponent implements OnInit {
  orders:Order[];
  ordercolumns:string[]=['order_date','invoice_no','customer_name','address','city','province','route','sales_agent','status','edit','delete'];
  constructor(private ordersservice:OrdersService) {
   }

  ngOnInit(): void {
    this.ordersservice.getOrders().subscribe(orders=>{
      console.log(orders);
      this.orders=orders;
    });
  }
}
