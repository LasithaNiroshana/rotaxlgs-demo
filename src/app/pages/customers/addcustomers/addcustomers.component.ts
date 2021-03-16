import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {CustomersService} from '../../../services/customers.service';
import {Customer} from '../../../models/customer';
import {MediaObserver,MediaChange} from '@angular/flex-layout';
import {Subscription} from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-addcustomers',
  templateUrl: './addcustomers.component.html',
  styleUrls: ['./addcustomers.component.scss']
})
export class AddcustomersComponent implements OnInit,OnDestroy {
  @Input()
  mediaSub:Subscription;
  deviceXs:boolean;

customer:Customer={
  customer_id:'',
  first_name:'',
  last_name:'',
  email:'',
  address_ln1:'',
  address_ln2:'',
  city:'',
  province:'',
  tel_no:'',
  distance:0
}

  constructor(private customersService:CustomersService,public mediaObserver:MediaObserver,private snackBar:MatSnackBar) {
   }

  ngOnInit(): void {
    this.mediaSub=this.mediaObserver.media$.subscribe((result:MediaChange)=>{
      this.deviceXs=result.mqAlias==='xs'?true:false;
    });
  }

  ngOnDestroy(){
    this.mediaSub.unsubscribe();
  }

  onSubmit(){
    if(this.customer.customer_id!=''
    && this.customer.customer_id!=''
    && this.customer.first_name!=''
    && this.customer.last_name!=''
    && this.customer.address_ln1!=''
    && this.customer.address_ln2!=''
    && this.customer.city!=''
    && this.customer.province!=''
    && this.customer.email!=''
    && this.customer.tel_no!=''){
      this.customersService.addCustomer(this.customer);
      this.openSnackBar('New customer added successfully.','');
      this.customer.customer_id='';
      this.customer.customer_id='';
      this.customer.first_name='';
      this.customer.last_name='' ;
      this.customer.address_ln1='';
      this.customer.address_ln2='';
      this.customer.city='';
      this.customer.province='';
      this.customer.email='' ;
      this.customer.tel_no='';
      this.customer.distance=0;
    }
    else{
      this.openSnackBar('Error occured while adding new customer!','');
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3200,
    });
  }

}
