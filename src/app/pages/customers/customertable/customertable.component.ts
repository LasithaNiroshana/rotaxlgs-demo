import { Component, OnInit } from '@angular/core';
import {CustomersService} from '../../../services/customers.service';
import {Customer} from '../../../models/customer';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-customertable',
  templateUrl: './customertable.component.html',
  styleUrls: ['./customertable.component.scss']
})
export class CustomertableComponent implements OnInit {
  customers:Customer[];
  customerColumns:string[]=['customer_id','customer_name','address','province','postal_code','email','telephone_no','customer_type','edit','delete'];
  constructor(private customersservice:CustomersService,private afs:AngularFirestore) { }

  ngOnInit(): void {
    // this.customersservice.getCustomers().subscribe(customers=>{
    //   console.log(customers);
    //   this.customers=customers;
    //   });
    this.customersservice.getCustomers().subscribe(cus=>{
      this.customers=[];
      cus.forEach(c=>{
        let customer:any=c.payload.doc.data();
        customer.id=c.payload.doc.id;
        this.customers.push(customer);
      });
    });
  }
  deleteCustomers(id:string){
    this.afs.doc<Customer>('customers/'+id).delete();
  }
  // deleteCustomers(){
  //   console.log('I am deleted');
  // }

}
