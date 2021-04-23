import { Component, OnInit,ViewChild,TemplateRef } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { DisroutsService } from 'src/app/services/disroutes.service';
import {MatDialog} from '@angular/material/dialog';
import {Driver} from '../../../models/drivers';
import { DltdialogService } from 'src/app/services/dltdialog.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DriversService } from 'src/app/services/drivers.service';

@Component({
  selector: 'app-routetable',
  templateUrl: './routetable.component.html',
  styleUrls: ['./routetable.component.scss']
})
export class RoutetableComponent implements OnInit {
  // @ViewChild('callDLTDialog') callDLTDialog: TemplateRef<any>;
  @ViewChild('assignAgent') assignAgent: TemplateRef<any>;
  assigned_person:string;
  driver_id:string;
  disroutes=[];
  rEdit=[];
  assigned=true;
  routes=[];
  drivers: Driver[];
  routeColumns:string[]=['Route_Name','cities','assinged_person', 'edit','delete'];
  constructor(private disroutsService:DisroutsService,
    private afs:AngularFirestore,
    public dialog:MatDialog,
    private driversService:DriversService,
    public dialogService:DltdialogService,
    private snackBar:MatSnackBar) {
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
    // this.disroutsService.getUARoutes().subscribe(rou=>{
    //   this.routes=[];
    //   rou.forEach(r=>{
    //     let uaroute:any = r.payload.doc.data();
    //     uaroute.id = r.payload.doc.id;
    //     this.routes.push(uaroute);
    //   })
    // });
  }

  searchDrivers(){
    this.driversService.getUASDriver(this.driver_id).snapshotChanges().subscribe(driv=>{
      this.drivers=[];
      if(driv.length>0){
      driv.forEach(d=>{
        let driver:any=d.payload.doc.data();
        driver.id=d.payload.doc.id;
        this.drivers.push(driver);
        this.assigned_person=driver.first_name+ ' ' + driver.last_name;
  });
  }else{
    this.openSnackBar('There are no unassigned drivers on this employee id.','');
  }
  });
  }

  deleteRoute(disroute){
    this.dialogService.openDltDialog().afterClosed().subscribe(res=>{
      if(res){
        if(disroute.driver_id!=''){
          this.afs.doc(`drivers/${disroute.driver_id}`).update({'assigned':false,'assigned_route':''});
          this.afs.doc(`routes/${disroute.id}`).delete();
        }
        else{
          this.afs.doc(`routes/${disroute.id}`).delete();
        }
    this.openSnackBar('Route deleted successfully.','');
  }
});
  }

  // callDialog() {
  //   this.dialog.open(this.callDLTDialog);
  // }

  callAssignment(rou) {
    this.rEdit=rou;
    this.dialog.open(this.assignAgent);
  }

  updateRoute(disroute){
    if(disroute.driver_id!=''){
      this.afs.doc(`drivers/${disroute.driver_id}`).update({'assigned':false,'assigned_route':''});
    this.disroutsService.updatePerson(disroute,this.assigned_person,this.driver_id);
    this.afs.doc(`drivers/${this.driver_id}`).update({'assigned':this.assigned,'assigned_route':disroute.route_name});
    this.assigned_person='';
    this.driver_id='';
    }
    else{
      this.disroutsService.updatePerson(disroute,this.assigned_person,this.driver_id);
    this.afs.doc(`drivers/${this.driver_id}`).update({'assigned':this.assigned,'assigned_route':disroute.route_name});
    this.assigned_person='';
    this.driver_id='';
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3200,
    });
  }

}
