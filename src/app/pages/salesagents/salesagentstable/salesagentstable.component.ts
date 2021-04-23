import { Component, OnInit,ViewChild,TemplateRef } from '@angular/core';
import {SalesagentsService} from '../../../services/salesagents.service';
import { AngularFirestore } from '@angular/fire/firestore';
import {MatDialog} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DltdialogService } from 'src/app/services/dltdialog.service';
import { Salesagent } from 'src/app/models/salesagents';

@Component({
  selector: 'app-salesagentstable',
  templateUrl: './salesagentstable.component.html',
  styleUrls: ['./salesagentstable.component.scss']
})
export class SalesagentstableComponent implements OnInit {
  @ViewChild('callDLTDialog') callDLTDialog: TemplateRef<any>;
  @ViewChild('callEDITDialog') callEDITDialog: TemplateRef<any>;
  salesagents=[];
  saedit=[];
  salesagentToEdit:Salesagent[];
  salesagentColumns:string[]=['employee_id','agent_name','mobile_no','email','sbu','edit','delete'];
  constructor(private salesagentservice:SalesagentsService, private afs:AngularFirestore,
    public dialog:MatDialog, private snackBar:MatSnackBar,private dialogService:DltdialogService) {}

  ngOnInit(): void {
    this.salesagentservice.getSalesagents().subscribe(sa=>{
      this.salesagents=[];
      sa.forEach(s=>{
        let salesAgent:any=s.payload.doc.data();
        salesAgent.id=s.payload.doc.id;
        this.salesagents.push(salesAgent);
      });
    });
  }

  editSalesAgent(salesAgent){
    this.afs.doc(`salesagents/${salesAgent.id}`).update(salesAgent);
  }

  deleteSalesAgents(salesagent){
    this.dialogService.openDltDialog().afterClosed().subscribe(res=>{
      if(res){
    this.afs.doc(`salesagents/${salesagent.id}`).delete();
    this.openSnackBar('Sales agent record deleted successfully','');
  }
});
  }

  // callDialog() {
  //   this.dialog.open(this.callDLTDialog);
  // }

  callEditDialog(sa) {
    this.saedit=sa;
    this.dialog.open(this.callEDITDialog);
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3200,
    });
  }

}
