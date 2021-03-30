import { Component, OnInit } from '@angular/core';
import {SalesagentsService} from '../../../services/salesagents.service';
import {Salesagent} from '../../../models/salesagents';
import { VehiclesService } from 'src/app/services/vehicles.service';
import { Vehicle } from 'src/app/models/vehicles';
import { AuthService } from 'src/app/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomersService } from 'src/app/services/customers.service';
import { Customer } from 'src/app/models/customer';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-addsalesagents',
  templateUrl: './addsalesagents.component.html',
  styleUrls: ['./addsalesagents.component.scss']
})
export class AddsalesagentsComponent implements OnInit {
  [x: string]: any;
  vehicles:Vehicle[];
  customers:Customer[];
  salesAgent:Salesagent={
  first_name:'',
  last_name:'',
  dob:new Date(),
  employee_id:'',
  mobile_no:'',
  email:'',
  address_ln1:'',
  address_ln2:'',
  city:'',
  assigned_customer:''
  }

  constructor(private salesagentsservice:SalesagentsService,
              private vehicleService: VehiclesService,
              private authService: AuthService,
              private customerService:CustomersService,
              private snackBar:MatSnackBar,
              private afs:AngularFirestore) { }

  ngOnInit(): void {
    this.vehicleService.getVehicles().subscribe(sa=>{
      this.vehicles = [];
      if(sa.length > 0){
        sa.forEach(vcl=>{
          let vehicle:any=vcl.payload.doc.data();
          this.vehicles.push(vehicle);
        });
      }});
      this.customerService.getSACustomers().subscribe(cus=>{
        this.customers=[];
        cus.forEach(c=>{
          let customer:any=c.payload.doc.data();
          customer.id=c.payload.doc.id;
          this.customers.push(customer);
        });
      });

  }

  onSubmit(){

    if(this.salesAgent.first_name!=''
    && this.salesAgent.last_name!=''
    && this.salesAgent.employee_id!=''
    && this.salesAgent.mobile_no!=''
    && this.salesAgent.email!=''
    && this.salesAgent.address_ln1!=''
    && this.salesAgent.address_ln2!=''
    && this.salesAgent.city!=''
    && this.salesAgent.assigned_customer!=''
    ){
      this.afs.collection('salesagents').doc(this.salesAgent.employee_id).set(this.salesAgent);
     this.openSnackBar('New Sales Agent added successfully','');
     this.salesAgent.first_name='';
     this.salesAgent.last_name='';
     this.salesAgent.employee_id='';
     this.salesAgent.mobile_no='';
     this.salesAgent.email='';
     this.salesAgent.address_ln1='';
     this.salesAgent.address_ln2='';
     this.salesAgent.city='';

    }
    else
    {
      this.openSnackBar('Error occured while adding new sales agent','One or more fields are empty.');
    }
  }


  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3200,
    });
  }

  resetForm(){
    this.salesAgent.first_name='';
    this.salesAgent.last_name='';
    this.salesAgent.employee_id='';
    this.salesAgent.mobile_no='';
    this.salesAgent.email='';
    this.salesAgent.address_ln1='';
    this.salesAgent.address_ln2='';
    this.salesAgent.city='';
  }

}
