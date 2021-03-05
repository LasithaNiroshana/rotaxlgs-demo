import { Component, OnInit,ViewChild,TemplateRef } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { DisroutsService } from 'src/app/services/disroutes.service';
import {MatDialog} from '@angular/material/dialog'
import { SalesagentsService } from 'src/app/services/salesagents.service';
import { Salesagent } from 'src/app/models/salesagents';

@Component({
  selector: 'app-routetable',
  templateUrl: './routetable.component.html',
  styleUrls: ['./routetable.component.scss']
})
export class RoutetableComponent implements OnInit {
  @ViewChild('callDLTDialog') callDLTDialog: TemplateRef<any>;
  @ViewChild('assignAgent') assignAgent: TemplateRef<any>;
  assigned_person:'';
  disroutes=[];
  sales_agents: Salesagent[];
  routeColumns:string[]=['Route_Name','cities','assinged_person', 'edit','delete'];
  constructor(private disroutsService:DisroutsService, 
    private afs:AngularFirestore, 
    public dialog:MatDialog,
    private salesagentService: SalesagentsService,) {

  }

  ngOnInit(): void {
    this.disroutsService.getRoutes().subscribe(route=>{
      this.disroutes=[];
      route.forEach(r=>{
        let disroute:any=r.payload.doc.data();
        disroute.id=r.payload.doc.id;
        this.disroutes.push(disroute);
      });
    });
    this.salesagentService.getSalesagents().subscribe(sa=>{
      this.sales_agents = [];
      if(sa.length > 0){
        sa.forEach(SA=>{
          let SalesAgent:any=SA.payload.doc.data();
          this.sales_agents.push(SalesAgent);
        });
      }});
  }

  deleteRoute(disroute){
    this.afs.doc(`disroutes/${disroute.id}`).delete();
  }

  callDialog() {
    this.dialog.open(this.callDLTDialog);
  }

  callAssignment() {
    this.dialog.open(this.assignAgent);
  }

  updateRoue(disroute){
    this.disroutsService.updatePerson(disroute,this.assigned_person);
    
  }

}
