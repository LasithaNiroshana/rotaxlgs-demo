import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {CustomersService} from '../../../services/customers.service';
import {Customer} from '../../../models/customer';
import {MediaObserver,MediaChange} from '@angular/flex-layout';
import {Subscription} from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SalesagentsService } from 'src/app/services/salesagents.service';
import { Salesagent } from 'src/app/models/salesagents';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-addcustomers',
  templateUrl: './addcustomers.component.html',
  styleUrls: ['./addcustomers.component.scss']
})
export class AddcustomersComponent implements OnInit,OnDestroy {
  @Input()
  mediaSub:Subscription;
  deviceXs:boolean;

  salesagents:Salesagent[];
customer:Customer={
  customer_id:'',
  name:'',
  email:'',
  address_ln1:'',
  address_ln2:'',
  city:'',
  province:'',
  tel_no:'',
  distance:0
}

  constructor(private customersService:CustomersService,
    public mediaObserver:MediaObserver,
    private snackBar:MatSnackBar,
    private saService:SalesagentsService,
    private afs:AngularFirestore) {
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
    && this.customer.name!=''
    && this.customer.address_ln1!=''
    && this.customer.address_ln2!=''
    && this.customer.city!=''
    && this.customer.province!=''
    && this.customer.email!=''
    && this.customer.tel_no!=''
    && this.customer.sa_id!=''
    && this.customer.sales_agent!=''
    ){
      this.customersService.addCustomer(this.customer);
      this.afs.doc(`salesagents/${this.customer.sa_id}`).update({'assigned_customer':this.customer.name,'customer_id':this.customer.customer_id});
      this.openSnackBar('New customer added successfully.','');
      this.customer.customer_id='';
      this.customer.customer_id='';
      this.customer.name='';
      this.customer.address_ln1='';
      this.customer.address_ln2='';
      this.customer.city='';
      this.customer.province='';
      this.customer.email='' ;
      this.customer.tel_no='';
      this.customer.distance=0;
      this.customer.sa_id='';
      this.customer.sales_agent='';
    }
    else{
      this.openSnackBar('Error occured while adding new customer!','');
    }
  }

  search(){
    this.saService.getInSAgent(this.customer.sa_id).snapshotChanges().subscribe(sa=>{
      this.salesagents=[];
      if(sa.length>0){
      sa.forEach(s=>{
        let salesagent:any=s.payload.doc.data();
        salesagent.id=s.payload.doc.id;
        this.salesagents.push(salesagent);
        this.customer.sa_id=salesagent.employee_id;
        this.customer.sales_agent=salesagent.first_name + salesagent.last_name;
  });
}else{
   this.openSnackBar('There is no sales agent registerd under the employee ID you entered or sales agent is already assigend!','');
  }
});
}

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3200,
    });
  }

  resetForm(){
    this.customer.customer_id='';
    this.customer.customer_id='';
    this.customer.name='';
    this.customer.address_ln1='';
    this.customer.address_ln2='';
    this.customer.city='';
    this.customer.province='';
    this.customer.email='' ;
    this.customer.tel_no='';
    this.customer.distance=0;
    this.customer.sa_id='';
    this.customer.sales_agent='';
  }

}
