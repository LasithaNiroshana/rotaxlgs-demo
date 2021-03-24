import { Component, OnInit,ViewChild,TemplateRef } from '@angular/core';
import {DriversService} from '../../../services/drivers.service';
import { AngularFirestore } from '@angular/fire/firestore';
import {MatDialog} from '@angular/material/dialog';
import { DltdialogService } from 'src/app/services/dltdialog.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-driverstable',
  templateUrl: './driverstable.component.html',
  styleUrls: ['./driverstable.component.scss']
})
export class DriverstableComponent implements OnInit {
  // @ViewChild('callDLTDialog') callDLTDialog: TemplateRef<any>;
  @ViewChild('callEDITDialog') callEDITDialog: TemplateRef<any>;
  drivers=[];
  driverColumns:string[]=['driver_name','license_no','license_expiry','mobile_no','assigned','edit','delete'];
  constructor(private driversservice:DriversService, private afs:AngularFirestore,
    public dialog:MatDialog,public dialogService:DltdialogService,private snackBar:MatSnackBar) {

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

  callEditDialog() {
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
