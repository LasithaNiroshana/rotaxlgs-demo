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
  ordercolumns:string[]=['invoice_no','customer_name','address','order_date','route','sales_agent','status'];
  constructor(private ordersservice:OrdersService) {
   }

   ngOnInit(): void {
    this.ordersservice.getDOrders().subscribe(order=>{
      this.orders=[];
      order.forEach(o=>{
        let ordes:any = o.payload.doc.data();
        ordes.id = o.payload.doc.id;
        this.orders.push(ordes);
      })
    });
  }

}
