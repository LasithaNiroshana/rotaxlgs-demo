import { Component, OnInit } from '@angular/core';
import {OrdersService} from '../../../services/orders.service';
import {Order} from '../../../models/order';

@Component({
  selector: 'app-orderstable',
  templateUrl: './orderstable.component.html',
  styleUrls: ['./orderstable.component.scss']
})
export class OrderstableComponent implements OnInit {
  orders:Order[];
  ordercolumns:string[]=['customer_id','customer_name','address','province','postal_code','invoice_no','item_type','order_date','route','sales_agent','status','edit','delete'];
  constructor(private ordersservice:OrdersService) {
   }

  ngOnInit(): void {
    this.ordersservice.getOrders().subscribe(orders=>{
      console.log(orders);
      this.orders=orders;
    });
  }

}
