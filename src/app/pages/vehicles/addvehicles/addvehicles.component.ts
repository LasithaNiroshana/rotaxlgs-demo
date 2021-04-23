import { Component, OnInit } from '@angular/core';
import {VehiclesService} from '../../../services/vehicles.service';
import {Vehicle} from '../../../models/vehicles';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AngularFirestore } from '@angular/fire/firestore';

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
  status:'',
  driver:'',
  assigned:''
  }

  constructor(private vehiclesService:VehiclesService,
    private snackBar:MatSnackBar,
    private afs:AngularFirestore
    ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(
      this.vehicle.vehicle_no!=''
      && this.vehicle.revenuelicense_no!=''
      && this.vehicle.insurance_company!=''
      && this.vehicle.insurance_tel!=''
      && this.vehicle.status!=''
      // && this.vehicle.telephone_no!=''
    ){
      this.afs.collection('vehicles').doc(this.vehicle.vehicle_no).set(this.vehicle);
      this.openSnackBar('New vehicle added successsfully','');
      this.vehicle.vehicle_no='';
      this.vehicle.revenuelicense_no!='';
      this.vehicle.insurance_company!='';
      this.vehicle.insurance_tel!='';
      this.vehicle.status!='';
    }
    else{
      this.openSnackBar('Error occured while adding new vehicle','One or more fields are empty.');
    }

      }

      openSnackBar(message: string, action: string) {
        this.snackBar.open(message, action, {
          duration: 3200,
        });
      }

      resetForm(){
        this.vehicle.vehicle_no='';
      this.vehicle.revenuelicense_no!='';
      this.vehicle.insurance_company!='';
      this.vehicle.insurance_tel!='';
      this.vehicle.status!='';
      this.vehicle.telephone_no!='';
      }

}
