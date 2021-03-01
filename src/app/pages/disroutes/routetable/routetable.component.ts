import { Component, OnInit,ViewChild,TemplateRef } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { DisroutsService } from 'src/app/services/disroutes.service';
import {MatDialog} from '@angular/material/dialog'

@Component({
  selector: 'app-routetable',
  templateUrl: './routetable.component.html',
  styleUrls: ['./routetable.component.scss']
})
export class RoutetableComponent implements OnInit {
  @ViewChild('callDLTDialog') callDLTDialog: TemplateRef<any>;
  disroutes=[];
  routeColumns:string[]=['Route_Name','cities', 'edit','delete'];
  constructor(private disroutsService:DisroutsService, private afs:AngularFirestore, public dialog:MatDialog) {

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
  }

  deleteRoute(disroute){
    this.afs.doc(`disroutes/${disroute.id}`).delete();
  }

  callDialog() {
    this.dialog.open(this.callDLTDialog);
  }

}
