import { Component, OnInit,ViewChild,TemplateRef } from '@angular/core';
import {DriversService} from '../../../services/drivers.service';
import { AngularFirestore } from '@angular/fire/firestore';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-driverstable',
  templateUrl: './driverstable.component.html',
  styleUrls: ['./driverstable.component.scss']
})
export class DriverstableComponent implements OnInit {
  @ViewChild('callDLTDialog') callDLTDialog: TemplateRef<any>;
  drivers=[];
  driverColumns:string[]=['driver_name','license_no','license_expiry','mobile_no','edit','delete'];
  constructor(private driversservice:DriversService, private afs:AngularFirestore,public dialog:MatDialog) {

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

  deleteDrivers(driver){
    this.afs.doc(`drivers/${driver.id}`).delete();
  }

  callDialog() {
    this.dialog.open(this.callDLTDialog);
  }

}
