import { Component, OnInit } from '@angular/core';
import {SalesagentsService} from '../../../services/salesagents.service';
import {Salesagent} from '../../../models/salesagents';
import { VehiclesService } from 'src/app/services/vehicles.service';
import { Vehicle } from 'src/app/models/vehicles';
import { AuthService } from 'src/app/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-addsalesagents',
  templateUrl: './addsalesagents.component.html',
  styleUrls: ['./addsalesagents.component.scss']
})
export class AddsalesagentsComponent implements OnInit {
  [x: string]: any;
  vehicles:Vehicle[];
  salesAgent:Salesagent={
  first_name:'',
  last_name:'',
  dob:new Date(),
  nic_no:'',
  mobile_no:'',
  email:'',
  address_ln1:'',
  address_ln2:'',
  city:''
  // vehicle_type:'',
  // assigned_vehicle:'',
  }

  constructor(private salesagentsservice:SalesagentsService,
              private vehicleService: VehiclesService,
              private authService: AuthService,
              private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.vehicleService.getVehicles().subscribe(sa=>{
      this.vehicles = [];
      if(sa.length > 0){
        sa.forEach(vcl=>{
          let vehicle:any=vcl.payload.doc.data();
          this.vehicles.push(vehicle);
        });
      }});
  }

  onSubmit(){

    if(this.salesAgent.first_name!=''
    && this.salesAgent.last_name!=''
    && this.salesAgent.nic_no!=''
    && this.salesAgent.mobile_no!=''
    && this.salesAgent.email!=''
    && this.salesAgent.address_ln1!=''
    && this.salesAgent.address_ln2!=''
    && this.salesAgent.city!=''
    // && this.salesAgent.vehicle_type!=''
    // && this.salesAgent.assigned_vehicle!=''
    ){
      this.salesagentsservice.addSalesAgent(this.salesAgent);
      this.openSnackBar('New sales agent data has been added successfully','');

    this.salesAgent.last_name='';
    this.salesAgent.nic_no='';
    this.salesAgent.mobile_no='';
    this.salesAgent.email='';
    this.salesAgent.address_ln1='';
    this.salesAgent.address_ln2='';
    this.salesAgent.city='';
    // this.salesAgent.vehicle_type='';
    // this.salesAgent.assigned_vehicle='';
    }
    else{
      this.openSnackBar('Error occured while adding new sales agent','');
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3200,
    });
  }

}
