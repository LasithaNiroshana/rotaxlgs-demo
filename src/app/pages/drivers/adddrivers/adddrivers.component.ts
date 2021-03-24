import { Component, OnInit } from '@angular/core';
import {DriversService} from '../../../services/drivers.service';
import {Driver} from '../../../models/drivers';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-adddrivers',
  templateUrl: './adddrivers.component.html',
  styleUrls: ['./adddrivers.component.scss']
})
export class AdddriversComponent implements OnInit {
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
    assigned_route:''
    };

  constructor(private driversService:DriversService,private snackBar:MatSnackBar) { }

  ngOnInit(): void {
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
      this.driversService.addDriver(this.driver);
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
