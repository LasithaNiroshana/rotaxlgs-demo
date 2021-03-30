import { Component, OnInit,ViewChild,TemplateRef } from '@angular/core';
import {DriversService} from '../../../services/drivers.service';
import { AngularFirestore } from '@angular/fire/firestore';
import {MatDialog} from '@angular/material/dialog';
import { DltdialogService } from 'src/app/services/dltdialog.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DisroutsService } from 'src/app/services/disroutes.service';

@Component({
  selector: 'app-driverstable',
  templateUrl: './driverstable.component.html',
  styleUrls: ['./driverstable.component.scss']
})
export class DriverstableComponent implements OnInit {
  // @ViewChild('callDLTDialog') callDLTDialog: TemplateRef<any>;
  @ViewChild('callEDITDialog') callEDITDialog: TemplateRef<any>;
  drivers=[];
  routes=[];
  drivEdit=[];
  driverColumns:string[]=['driver_name','license_no','license_expiry','mobile_no','assigned','assigned_route','edit','delete'];
  constructor(private driversservice:DriversService, private afs:AngularFirestore,
    public dialog:MatDialog,public dialogService:DltdialogService,
    private snackBar:MatSnackBar,private routeService:DisroutsService) {

  }

  ngOnInit(): void {
    this.driversservice.getDrivers().subscribe(driv=>{
      this.drivers=[];
      driv.forEach(d=>{
        let driver:any=d.payload.doc.data();
        driver.id=d.payload.doc.id;
        this.drivers.push(driver);
      });
    });
    this.routeService.getUARoutes().subscribe(rout=>{
      this.routes=[];
      rout.forEach(r=>{
        let route:any=r.payload.doc.data();
        route.id=r.payload.doc.id;
        this.routes.push(route);
      });
    });
  }

  editDriver(driver){
    this.afs.doc(`drivers/${driver.id}`).update(driver);
  }

  deleteDrivers(driver){
    this.dialogService.openDltDialog().afterClosed().subscribe(res=>{
      if(res){
    this.afs.doc(`drivers/${driver.id}`).delete();
    this.openSnackBar('Driver/Delivery Assistant record deleted successfully','');
  }
});
  }

  callEditDialog(driv) {
    this.drivEdit=driv;
    this.dialog.open(this.callEDITDialog);
  }

  // callDialog() {
  //   this.dialog.open(this.callDLTDialog);
  // }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3200,
    });
  }

}
