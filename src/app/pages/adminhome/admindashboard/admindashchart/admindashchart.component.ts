import { Component, OnInit } from '@angular/core';
import {OrdersService} from '../../../../services/orders.service';
import {Order} from '../../../../models/order';
@Component({
  selector: 'app-admindashchart',
  templateUrl: './admindashchart.component.html',
  styleUrls: ['./admindashchart.component.scss']
})
export class AdmindashchartComponent implements OnInit {
  orders:Order[];
  ordercolumns:string[]=['customer_id','customer_name','address','invoice_no','item_type','order_date','route','sales_agent','status'];
  constructor(private ordersservice:OrdersService) {
   }

  ngOnInit(): void {
    this.ordersservice.getOrders().subscribe(orders=>{
      console.log(orders);
      this.orders=orders;
    });
  }

}
