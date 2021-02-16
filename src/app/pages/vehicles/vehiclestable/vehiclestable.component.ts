import { Component, OnInit } from '@angular/core';
import {VehiclesService} from '../../../services/vehicles.service';
import {Vehicle} from '../../../models/vehicles';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-vehiclestable',
  templateUrl: './vehiclestable.component.html',
  styleUrls: ['./vehiclestable.component.scss']
})
export class VehiclestableComponent implements OnInit {
  vehicles=[];
  vehiclesColumns:string[]=['vehicle_no','rl_no','rl_expiry','vehicle_type','company_name','address','tel_no','delete'];
  constructor(private vehiclesservice:VehiclesService, private afs:AngularFirestore) { }

  ngOnInit(): void {
    this.vehiclesservice.getVehicles().subscribe(vehi=>{
      this.vehicles=[];
      vehi.forEach(v=>{
        let vehicle:any=v.payload.doc.data();
        vehicle.id=v.payload.doc.id;
        this.vehicles.push(vehicle);
        console.log(vehicle.id);
      });
    });
  }

  deleteVehicle(vehicle){
    this.afs.collection('vehicles').doc(vehicle.id).delete();
  }

}
