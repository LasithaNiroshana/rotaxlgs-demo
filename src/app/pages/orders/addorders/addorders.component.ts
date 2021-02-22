import { Component, OnInit } from '@angular/core';
import {OrdersService} from '../../../services/orders.service';
import { Order } from '../../../models/order';
import { Customer } from 'src/app/models/customer';
import { CustomersService } from 'src/app/services/customers.service';
import { SalesagentsService } from 'src/app/services/salesagents.service';
import { Salesagent } from 'src/app/models/salesagents';
import { DisroutsService } from 'src/app/services/disroutes.service';


@Component({
  selector: 'app-addorders',
  templateUrl: './addorders.component.html',
  styleUrls: ['./addorders.component.scss']
})
export class AddordersComponent implements OnInit {
  [x: string]: any;
  customers:Customer[];
  sales_agents: Salesagent[];

  order:Order={
    id:'',
  customer_id:'',
  customer_name:'',
  address_ln1:'',
  address_ln2:'',
  city:'',
  province:'',
  invoice_no:'',
  item_type:'',
  order_date:new Date(),
  route:'',
  sales_agent:'',
  status:'',
  }

  constructor(private ordersService:OrdersService,
    private customerService: CustomersService,
    private salesagentService: SalesagentsService,
    private routeService: DisroutsService) { }

  ngOnInit(): void {this.salesagentService.getSalesagents().subscribe(sa=>{
    this.sales_agents = [];
    if(sa.length > 0){
      sa.forEach(SA=>{
        let SalesAgent:any=SA.payload.doc.data();
        this.sales_agents.push(SalesAgent);
      });
    }});
  }
    // this.salesagentService.getSalesagents().subscribe(salesagents=>
    //   {
    //     console.log(salesagents);
    //     this.sales_agent=salesagents;
    //   });


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
this.order.route='';
this.order.status='';
this.order.item_type='';
this.order.sales_agent='';
  }

  onSubmit() {
    if (this.order.invoice_no != ''
      && this.order.customer_id != ''
      && this.order.customer_name != ''
      && this.order.address_ln1 != ''
      && this.order.address_ln2 != ''
      && this.order.city != ''
      && this.order.province != ''
      && this.order.item_type != ''
      && this.order.sales_agent != ''
      && this.order.status != '') {
      console.log(this.order.invoice_no)
      this.ordersService.getspOrder(this.order.invoice_no).snapshotChanges().subscribe(ord => {
        if (ord.length > 0) {
          alert('This invoice Number is already added.')
        } else {
          try {
            this.ordersService.addOrder(this.order);
            alert('Order has been added successfully');
            console.log(this.order);
            this.order.invoice_no = '';
            this.order.customer_id = '';
            this.order.customer_name = '';
            this.order.address_ln1 = '';
            this.order.address_ln2 = '';
            this.order.city = '';
            this.order.province = '';
            this.order.route = '';
            this.order.status = '';
            this.order.item_type = '';
            this.order.sales_agent = '';
          }
          catch (error) {
            alert(error);
          }
        }
      });
    } else {
      alert("Please fill all the fields.")
    }
  }

  search(){
    this.customerService.getspcustomer(this.order.customer_id).snapshotChanges().subscribe(cus=>{
      this.customers=[];
      console.log(cus);
      if(cus.length>0){
      cus.forEach(c=>{
        let customer:any=c.payload.doc.data();
        customer.id=c.payload.doc.id;
        this.customers.push(customer);
        this.order.customer_name=this.customers[0].first_name +' ' + this.customers[0].last_name ;
        this.order.address_ln1=this.customers[0].address_ln1;
        this.order.address_ln2=this.customers[0].address_ln2;
        this.order.city=this.customers[0].city;
        this.order.province=this.customers[0].province;
  });}else{
    alert("No customers has been registered under this Customer ID. Please check the Customer ID")
  }
});
}

route() {
  console.log(this.order.city);
  this.routeService.getroute(this.order.city).snapshotChanges().subscribe(route =>{
    try {
      this.routes = [];
    if(route.length > 0){
      route.forEach(r => {
        let route: any= r.payload.doc.data();
        console.log(route)
        this.routes.push(route);
        console.log(this.routes[0].route_name)
        this.order.route = this.routes[0].route_name;
      });
    }
    } catch (error) {
      console.log(error)
    }
  })
}

}
