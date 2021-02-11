import { Component, OnInit } from '@angular/core';
import {DriversService} from '../../../services/drivers.service';
import {Driver} from '../../../models/drivers';

@Component({
  selector: 'app-driverstable',
  templateUrl: './driverstable.component.html',
  styleUrls: ['./driverstable.component.scss']
})
export class DriverstableComponent implements OnInit {
  drivers:Driver[];
  driverColumns:string[]=['driver_name','address','license_no','license_expiry','email','mobile_no','edit','delete'];
  constructor(private driversservice:DriversService) {

  }

  ngOnInit(): void {
    this.driversservice.getDrivers().subscribe(drivers=>
      {
        console.log(drivers);
        this.drivers=drivers;
      }
      );
  }

}
