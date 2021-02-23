import { Component, OnInit } from '@angular/core';
import {VehiclesService} from '../../../services/vehicles.service';
import {Vehicle} from '../../../models/vehicles';

@Component({
  selector: 'app-addvehicles',
  templateUrl: './addvehicles.component.html',
  styleUrls: ['./addvehicles.component.scss']
})
export class AddvehiclesComponent implements OnInit {
  vehicle:Vehicle={
  vehicle_no:'',
  revenuelicense_no:'',
  revenuelicense_expiry:new Date(),
  telephone_no:'',
  vehicle_size:'',
  }

  constructor(private vehiclesService:VehiclesService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(
      this.vehicle.vehicle_no!=''
      && this.vehicle.revenuelicense_no!=''
      
      // && this.vehicle.company_name!=''
      // && this.vehicle.address_ln1!=''
      // && this.vehicle.address_ln2!=''
      // && this.vehicle.city!=''
      // && this.vehicle.telephone_no!=''
    ){
      this.vehiclesService.addVehicle(this.vehicle);
      alert('Vehicle has been added successfully');
      console.log(this.vehicle);
      this.vehicle.vehicle_no='';
      this.vehicle.revenuelicense_no='';
      this.vehicle.telephone_no='';
    }
    else{
      alert('Error adding new vehicle');
    }

      }

}
