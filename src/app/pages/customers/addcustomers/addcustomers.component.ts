import { Component, OnInit } from '@angular/core';
import {CustomersService} from '../../../services/customers.service';
import {Customer} from '../../../models/customer';

@Component({
  selector: 'app-addcustomers',
  templateUrl: './addcustomers.component.html',
  styleUrls: ['./addcustomers.component.scss']
})
export class AddcustomersComponent implements OnInit {
customer:Customer={
  customer_id:'',
  first_name:'',
  last_name:'',
  email:'',
  address_ln1:'',
  address_ln2:'',
  city:'',
  province:'',
  postal_code:'',
  tel_no:'',
  customer_type:'',
}

  constructor(private customersService:CustomersService) {
   }

  ngOnInit(): void {
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
    && this.customer.postal_code!=''
    && this.customer.email!=''
    && this.customer.tel_no!=''
    && this.customer.customer_type!=''){
      this.customersService.addCustomer(this.customer);
      alert('New customer has been added successfully');
      console.log(this.customer);
      this.customer.customer_id='';
      this.customer.customer_id='';
      this.customer.first_name='';
      this.customer.last_name='' ;
      this.customer.address_ln1='';
      this.customer.address_ln2='';
      this.customer.city='';
      this.customer.province='';
      this.customer.postal_code='';
      this.customer.email='' ;
      this.customer.tel_no='';
      this.customer.customer_type='';
    }
    else{
      alert('Error Adding Customer');
    }
  }

}
