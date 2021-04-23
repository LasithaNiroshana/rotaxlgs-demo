import { Component, OnInit } from '@angular/core';
import {DriversService} from '../../../services/drivers.service';
import {Driver} from '../../../models/drivers';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DisroutsService } from 'src/app/services/disroutes.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { VehiclesService } from 'src/app/services/vehicles.service';

@Component({
  selector: 'app-adddrivers',
  templateUrl: './adddrivers.component.html',
  styleUrls: ['./adddrivers.component.scss']
})
export class AdddriversComponent implements OnInit {
  routes=[];
  vehicles=[];
  driver:Driver={
    first_name:'',
    last_name:'',
    license_no:'',
    license_expiry:new Date(),
    email:'',
    address_ln1:'',
    address_ln2:'',
    city:'',
    mobile_no:'',
    employee_id:'',
    assigned:false,
    assigned_route:'',
    vehicle:''
    };

  constructor(private driversService:DriversService,
    private snackBar:MatSnackBar,
    private routeService:DisroutsService,
    private vehicleService:VehiclesService,
    private afs:AngularFirestore) { }

  ngOnInit(): void {
    this.routeService.getUARoutes().subscribe(rout=>{
      this.routes=[];
      rout.forEach(r=>{
        let route:any=r.payload.doc.data();
        route.id=r.payload.doc.id;
        this.routes.push(route);
      });
    });
    this.vehicleService.getUAVehicles().subscribe(vehi=>{
      this.vehicles=[];
      vehi.forEach(v=>{
        let vehicle:any=v.payload.doc.data();
        vehicle.id=v.payload.doc.id;
        this.vehicles.push(vehicle);
      });
    });
  }

  onSubmit(){
    if(this.driver.license_no!=''
    && this.driver.first_name!=''
    && this.driver.last_name!=''
    && this.driver.email!=''
    && this.driver.mobile_no!=''
    && this.driver.license_no!=''
    // && this.drivers.license_expiry!=''
    // && this.drivers.dob!=''
    ){
      this.afs.collection('drivers').doc(this.driver.employee_id).set(this.driver);
      this.afs.doc(`vehicles/${this.driver.vehicle}`).update({'driver':this.driver.first_name+' '+this.driver.last_name,'assigned':'Yes'});
      this.openSnackBar('New driver has been added successfully.','');
      this.driver.license_no='';
    this.driver.first_name='';
    this.driver.last_name='';
    this.driver.email='';
    this.driver.mobile_no='';
    this.driver.license_no='';
    this.driver.address_ln1='';
    this.driver.address_ln2='';
    this.driver.city='';
    }
    else {
      this.openSnackBar('Error adding new order.','One or more fields are empty');
    }
  }

  resetForm(){
    this.driver.employee_id='';
    this.driver.license_no='';
    this.driver.first_name='';
    this.driver.last_name='';
    this.driver.email='';
    this.driver.mobile_no='';
    this.driver.license_no='';
    this.driver.address_ln1='';
    this.driver.address_ln2='';
    this.driver.city='';
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3200,
    });
  }


}
