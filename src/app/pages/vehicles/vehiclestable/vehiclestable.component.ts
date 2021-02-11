import { Component, OnInit } from '@angular/core';
import {VehiclesService} from '../../../services/vehicles.service';
import {Vehicle} from '../../../models/vehicles';

@Component({
  selector: 'app-vehiclestable',
  templateUrl: './vehiclestable.component.html',
  styleUrls: ['./vehiclestable.component.scss']
})
export class VehiclestableComponent implements OnInit {
  vehicles:Vehicle[];
  vehiclesColumns:string[]=['vehicle_no','rl_no','rl_expiry','vehicle_type','company_name','address','tel_no'];
  constructor(private vehiclesservice:VehiclesService) { }

  ngOnInit(): void {
    this.vehiclesservice.getVehicles().subscribe(vehicles=>
      {
        console.log(vehicles);
        this.vehicles=vehicles;
      }
      );
  }

}
