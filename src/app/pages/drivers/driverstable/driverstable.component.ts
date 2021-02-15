import { Component, OnInit } from '@angular/core';
import {DriversService} from '../../../services/drivers.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-driverstable',
  templateUrl: './driverstable.component.html',
  styleUrls: ['./driverstable.component.scss']
})
export class DriverstableComponent implements OnInit {
  drivers=[];
  driverColumns:string[]=['driver_name','license_no','license_expiry','mobile_no','edit','delete'];
  constructor(private driversservice:DriversService, private afs:AngularFirestore) {

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
    this.afs.collection('drivers').doc(driver.id).delete();
  }

}
