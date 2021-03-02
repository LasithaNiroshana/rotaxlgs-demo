import { Component, OnInit } from '@angular/core';
import { Order } from '../../../models/order';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-adminstatcard4',
  templateUrl: './adminstatcard4.component.html',
  styleUrls: ['./adminstatcard4.component.scss']
})
export class Adminstatcard4Component implements OnInit {
  orders:Order[];
  constructor(private ordersservice: OrdersService) { }

  ngOnInit(): void {
    this.ordersservice.getDOrders().subscribe(order=>{
      this.orders=[];
      order.forEach(o=>{
<<<<<<< HEAD
        let ordes:any = o.payload.doc.data();
        ordes.id = o.payload.doc.id;
        this.orders.push(ordes);
=======
        let order:any = o.payload.doc.data();
        order.id = o.payload.doc.id;
        this.orders.push(order);
>>>>>>> 9623c141b22d9b35645ab2d46ab3c72d3291d7e6
      })
    });
  }
}
