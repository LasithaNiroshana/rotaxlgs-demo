import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-adminstatcard3',
  templateUrl: './adminstatcard3.component.html',
  styleUrls: ['./adminstatcard3.component.scss']
})
export class Adminstatcard3Component implements OnInit {
  orders:Order[];

  constructor(private ordersService:OrdersService) { }

  ngOnInit(): void {
    this.ordersService.getOnDeliOrders().subscribe(order=>{
      this.orders=[];
      order.forEach(o=>{
        let order:any = o.payload.doc.data();
        order.id = o.payload.doc.id;
        this.orders.push(order);
      })
    });
  }

}
