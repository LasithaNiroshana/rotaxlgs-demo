import { Component, OnInit,Input,TemplateRef,ViewChild } from '@angular/core';
import {CustomersService} from '../../../services/customers.service';
import { AngularFirestore } from '@angular/fire/firestore';
import {MediaObserver,MediaChange} from '@angular/flex-layout';
import {MatDialog} from '@angular/material/dialog';
import {Subscription} from 'rxjs';
import { DltdialogService } from 'src/app/services/dltdialog.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-customertable',
  templateUrl: './customertable.component.html',
  styleUrls: ['./customertable.component.scss']
})
export class CustomertableComponent implements OnInit {
  // @ViewChild('callDLTDialog') callDLTDialog: TemplateRef<any>;
  @ViewChild('callEDITDialog') callEDITDialog: TemplateRef<any>;
  @Input()
  mediaSub:Subscription;
  deviceXs:boolean;
  customers=[];
  customerColumns:string[]=['customer_id','customer_name','address','email','telephone_no','KM_RLH','edit','delete'];
  constructor(private customersservice:CustomersService,private afs:AngularFirestore,
     public mediaObserver:MediaObserver,public dialog:MatDialog,
     public dialogService:DltdialogService,private snackBar:MatSnackBar) { }

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

  editCustomer(customer){
    this.afs.doc(`customers/${customer.id}`).update(customer);
  }

  deleteCustomers(customer){
    this.dialogService.openDltDialog().afterClosed().subscribe(res=>{
      if(res){
    this.afs.doc(`customers/${customer.id}`).delete();
    this.openSnackBar('Customer record deleted successfully.','')
  }
});
  }

  callEditDialog() {
    this.dialog.open(this.callEDITDialog);
  }

  // callDialog() {
  //   this.dialog.open(this.callDLTDialog);
  // }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3200,
    });
  }

}
