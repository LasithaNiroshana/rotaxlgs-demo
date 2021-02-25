import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order';
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
        let order:any = o.payload.doc.data();
        order.id = o.payload.doc.id;
        this.orders.push(order);
=======
        let ordes:any = o.payload.doc.data();
        ordes.id = o.payload.doc.id;
        this.orders.push(ordes);
>>>>>>> 0d6dee6e0d99e22c4348dd5da765c35c31930fc8
      })
    });
  }
}
