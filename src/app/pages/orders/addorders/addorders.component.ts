import { Component, OnInit } from '@angular/core';
import {OrdersService} from '../../../services/orders.service';
import { Order } from '../../../models/order';


@Component({
  selector: 'app-addorders',
  templateUrl: './addorders.component.html',
  styleUrls: ['./addorders.component.scss']
})
export class AddordersComponent implements OnInit {
  order:Order={
    customer_id:'',
  customer_name:'',
  address_ln1:'',
  address_ln2:'',
  city:'',
  province:'',
  postal_code:'',
  invoice_no:'',
  item_type:'',
  order_date:new Date(),
  route:'',
  sales_agent:'',
  status:''
  }

  constructor(private ordersService:OrdersService) { }

  ngOnInit(): void {
  }

  routeSelector(){
    this.order.route = ''
    let r1 = ['Kelaniya','Kadawatha','Kegalle','Kadugannawa','Peradeniya','Gannoruwa','Kandy'];
    let r2 = ['Bambalapitiya','Kollupitiya','Dehiwala','Mount Lavinia','','Kauthara','Benthara','Galle','Matara','Hambantota','Tangalle'];
    let r3=['Wattala','Ragama','Kandana','Ja-Ela','Negombo','Katunayake'];
    if(r1.includes(this.order.city)){
      this.order.route='R1';
    }
    else if(r2.includes(this.order.city)){
      this.order.route='R2';
    }
    else if(r3.includes(this.order.city)){
      this.order.route='R3';
    }
    else this.order.route='R4';
console.log(this.order.route);

  }

  reset(){
    this.order.invoice_no='';
this.order.customer_id='';
this.order.customer_name='';
this.order.address_ln1='';
this.order.address_ln2='';
this.order.city='';
this.order.province='';
this.order.postal_code='';
this.order.route='';
this.order.status='';
this.order.item_type='';
this.order.sales_agent='';
  }

  onSubmit(){
    if(this.order.invoice_no!=''
    && this.order.customer_id!=''
    && this.order.customer_name!=''
    && this.order.address_ln1!=''
    && this.order.address_ln2!=''
    && this.order.city!=''
    && this.order.province!=''
    && this.order.postal_code!=''
    && this.order.route!=''
    && this.order.item_type!=''
    && this.order.sales_agent!=''
    && this.order.status!=''){
      this.ordersService.addOrder(this.order);
      alert('Order has been added successfully');
      console.log(this.order);
this.order.invoice_no='';
this.order.customer_id='';
this.order.customer_name='';
this.order.address_ln1='';
this.order.address_ln2='';
this.order.city='';
this.order.province='';
this.order.postal_code='';
this.order.route='';
this.order.status='';
this.order.item_type='';
this.order.sales_agent='';
    }
    else{
      alert('Error adding new order');
    }
  }

}
