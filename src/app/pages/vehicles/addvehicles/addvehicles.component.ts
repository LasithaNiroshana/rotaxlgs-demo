import { Component, OnInit } from '@angular/core';
import {VehiclesService} from '../../../services/vehicles.service';
import {Vehicle} from '../../../models/vehicles';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  insurance_expiry:new Date(),
  telephone_no:'',
  vehicle_size:'',
  insurance_tel:'',
  insurance_company:'',
  }

  constructor(private vehiclesService:VehiclesService, private snackBar:MatSnackBar) { }

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
      this.openSnackBar('New vehicle added successsfully','');
      this.vehicle.vehicle_no='';
      this.vehicle.revenuelicense_no='';
      this.vehicle.telephone_no='';
    }
    else{
      this.openSnackBar('Error occured while adding new vehicle','');
    }

      }

      openSnackBar(message: string, action: string) {
        this.snackBar.open(message, action, {
          duration: 3200,
        });
      }

}
