import { Component, OnInit } from '@angular/core';
import {SalesagentsService} from '../../../services/salesagents.service';
import {Salesagent} from '../../../models/salesagents';

@Component({
  selector: 'app-salesagentstable',
  templateUrl: './salesagentstable.component.html',
  styleUrls: ['./salesagentstable.component.scss']
})
export class SalesagentstableComponent implements OnInit {
  salesagents:Salesagent[];
  salesagentColumns:string[]=['agent_id','agent_name','dob','nic_no','mobile_no','address','vehicle_type','vehicle_no','edit','delete'];
  constructor(private salesagentservice:SalesagentsService) {

   }

  ngOnInit(): void {
    this.salesagentservice.getSalesagents().subscribe(salesagents=>
      {
        console.log(salesagents);
        this.salesagents=salesagents;
      });
  }

}
