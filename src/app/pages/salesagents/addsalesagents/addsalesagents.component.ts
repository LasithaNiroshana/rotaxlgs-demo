import { Component, OnInit } from '@angular/core';
import {SalesagentsService} from '../../../services/salesagents.service';
import {Salesagent} from '../../../models/salesagents';

@Component({
  selector: 'app-addsalesagents',
  templateUrl: './addsalesagents.component.html',
  styleUrls: ['./addsalesagents.component.scss']
})
export class AddsalesagentsComponent implements OnInit {
  salesAgent:Salesagent={
    agent_id:'',
  first_name:'',
  last_name:'',
  dob:new Date(),
  nic_no:'',
  mobile_no:'',
  email:'',
  address_ln1:'',
  address_ln2:'',
  city:'',
  vehicle_type:'',
  assigned_vehicle:'',
  }

  constructor(private salesagentsservice:SalesagentsService) { }

  ngOnInit(): void {
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
    && this.salesAgent.vehicle_type!=''
    && this.salesAgent.assigned_vehicle!=''
    ){
      this.salesagentsservice.addSalesAgent(this.salesAgent);
      alert('New sales agent data has been added successfully')
    
    this.salesAgent.last_name='';
    this.salesAgent.nic_no='';
    this.salesAgent.mobile_no='';
    this.salesAgent.email='';
    this.salesAgent.address_ln1='';
    this.salesAgent.address_ln2='';
    this.salesAgent.city='';
    this.salesAgent.vehicle_type='';
    this.salesAgent.assigned_vehicle='';
    }
    else{alert('Error...!!!')}
  }

}
