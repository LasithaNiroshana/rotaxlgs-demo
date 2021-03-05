import { Component, OnInit,Input,TemplateRef,ViewChild } from '@angular/core';
import {CustomersService} from '../../../services/customers.service';
import { AngularFirestore } from '@angular/fire/firestore';
import {MediaObserver,MediaChange} from '@angular/flex-layout';
import {MatDialog} from '@angular/material/dialog';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-customertable',
  templateUrl: './customertable.component.html',
  styleUrls: ['./customertable.component.scss']
})
export class CustomertableComponent implements OnInit {
  @ViewChild('callDLTDialog') callDLTDialog: TemplateRef<any>;
  @Input()
  mediaSub:Subscription;
  deviceXs:boolean;
  customers=[];
  customerColumns:string[]=['customer_id','customer_name','address','email','telephone_no','KM_RLH','edit','delete'];
  constructor(private customersservice:CustomersService,private afs:AngularFirestore,
     public mediaObserver:MediaObserver,public dialog:MatDialog) { }

  ngOnInit(): void {
    this.customersservice.getCustomers().subscribe(cus=>{
      this.customers=[];
      cus.forEach(c=>{
        let customer:any=c.payload.doc.data();
        customer.id=c.payload.doc.id;
        this.customers.push(customer);
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
    // this.afs.collection('customers').doc(customer.id).delete();
    this.afs.doc(`customers/${customer.id}`).delete();
  }

  callDialog() {
    this.dialog.open(this.callDLTDialog);
  }

}
