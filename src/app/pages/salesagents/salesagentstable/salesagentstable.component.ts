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
  salesagentColumns:string[]=['agent_id','agent_name','mobile_no','email','edit','delete'];
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
