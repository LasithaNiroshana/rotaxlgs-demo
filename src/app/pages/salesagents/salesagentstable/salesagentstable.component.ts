import { Component, OnInit,ViewChild,TemplateRef } from '@angular/core';
import {SalesagentsService} from '../../../services/salesagents.service';
import { AngularFirestore } from '@angular/fire/firestore';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-salesagentstable',
  templateUrl: './salesagentstable.component.html',
  styleUrls: ['./salesagentstable.component.scss']
})
export class SalesagentstableComponent implements OnInit {
  @ViewChild('callDLTDialog') callDLTDialog: TemplateRef<any>;
  @ViewChild('callEDITDialog') callEDITDialog: TemplateRef<any>;
  salesagents=[];
  salesagentColumns:string[]=['agent_id','agent_name','mobile_no','email','edit','delete'];
  constructor(private salesagentservice:SalesagentsService, private afs:AngularFirestore,public dialog:MatDialog) {}

  ngOnInit(): void {
    this.salesagentservice.getSalesagents().subscribe(sa=>{
      this.salesagents=[];
      sa.forEach(s=>{
<<<<<<< HEAD
        let salesAgent:any=s.payload.doc.data();
        salesAgent.id=s.payload.doc.id;
        this.salesagents.push(salesAgent);
=======
        let salesagent:any=s.payload.doc.data();
        salesagent.id=s.payload.doc.id;
        this.salesagents.push(salesagent);
>>>>>>> 46018d60a8f1ba560ca337b5a658621aab2a5d83
      });
    });
  }

  editSalesAgent(salesAgent){
    this.afs.doc(`salesagents/${salesAgent.id}`).update(salesAgent);
  }

  deleteSalesAgents(salesagent){
    // this.afs.collection('salesagents').doc(salesagent.id).delete();
    this.afs.doc(`salesagents/${salesagent.id}`).delete();
  }

  callDialog() {
    this.dialog.open(this.callDLTDialog);
  }

  callEditDialog() {
    this.dialog.open(this.callEDITDialog);
  }

}
