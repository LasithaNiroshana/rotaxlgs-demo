import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Order } from 'src/app/models/order';
import {OrdersService} from '../../../services/orders.service'



@Component({
  selector: 'app-editpopup',
  templateUrl: './editpopup.component.html',
  styleUrls: ['./editpopup.component.scss']
})
export class EditpopupComponent implements OnInit {
Tstatus:'';

  constructor(private orderServices: OrdersService,
    private dialog: MatDialog,) { }
  // private orderService : OrdersService 
  ngOnInit(): void {
  }

  onSubmit(){
    this.orderServices.update(this.Tstatus);
    alert('Invoice status is updated.')
   }

  close(){
    this.dialog.closeAll();
  }
}
