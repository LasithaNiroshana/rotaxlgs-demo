import { Component, OnInit,OnDestroy,Input } from '@angular/core';
import {CustomersService} from '../../../services/customers.service';
import { AngularFirestore } from '@angular/fire/firestore';
import {MediaObserver,MediaChange} from '@angular/flex-layout';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-customertable',
  templateUrl: './customertable.component.html',
  styleUrls: ['./customertable.component.scss']
})
export class CustomertableComponent implements OnInit {
  @Input()
  mediaSub:Subscription;
  deviceXs:boolean;
  customers=[];
  customerColumns:string[]=['customer_id','customer_name','address','email','telephone_no','KM_RLH','edit','delete'];
  constructor(private customersservice:CustomersService,private afs:AngularFirestore, public mediaObserver:MediaObserver) { }

  ngOnInit(): void {
    this.customersservice.getCustomers().subscribe(cus=>{
      this.customers=[];
      cus.forEach(c=>{
        let customer:any=c.payload.doc.data();
        customer.id=c.payload.doc.id;
        this.customers.push(customer);
        console.log(customer.id);
      });
    });

    this.mediaSub=this.mediaObserver.media$.subscribe((result:MediaChange)=>{
      this.deviceXs=result.mqAlias==='xs'?true:false;
    });
  }

  ngOnDestroy(){
    this.mediaSub.unsubscribe();
  }

  deleteCustomers(customer){
    this.afs.collection('customers').doc(customer.id).delete();
  }

}
