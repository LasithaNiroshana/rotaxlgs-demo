import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-driverpopup',
  templateUrl: './driverpopup.component.html',
  styleUrls: ['./driverpopup.component.scss']
})
export class DriverpopupComponent implements OnInit {
  Dstatus:'';
  selectedFile : null;

  constructor(private orderServices: OrdersService,
              private httpclient: HttpClient) { }
  // private orderService : OrdersService 
  ngOnInit(): void {
  }

  onFileSelected(event){
    this.selectedFile = event.target.files[0];
  }

  onUpload(){}

  onSubmit(){
    this.orderServices.updatefrmDriver(this.Dstatus);
    alert('Invoice status is updated.')
   }
}