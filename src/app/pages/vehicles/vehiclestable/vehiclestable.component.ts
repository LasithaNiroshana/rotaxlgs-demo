import { Component, OnInit,TemplateRef,ViewChild } from '@angular/core';
import {VehiclesService} from '../../../services/vehicles.service';
import { AngularFirestore } from '@angular/fire/firestore';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-vehiclestable',
  templateUrl: './vehiclestable.component.html',
  styleUrls: ['./vehiclestable.component.scss']
})

export class VehiclestableComponent implements OnInit {
  @ViewChild('callDLTDialog') callDLTDialog: TemplateRef<any>;
  vehicles=[];
  vehiclesColumns:string[]=['vehicle_no','rl_no','rl_expiry','vehicle_size','tel_no','delete'];
  constructor(private vehiclesservice:VehiclesService, private afs:AngularFirestore,public dialog:MatDialog) { }

  ngOnInit(): void {
    this.vehiclesservice.getVehicles().subscribe(vehi=>{
      this.vehicles=[];
      vehi.forEach(v=>{
        let vehicle:any=v.payload.doc.data();
        vehicle.id=v.payload.doc.id;
        this.vehicles.push(vehicle);
      });
    });
  }

  deleteVehicle(vehicle){
    // this.afs.collection('vehicles').doc(vehicle.id).delete();
    this.afs.doc(`vehicles/${vehicle.id}`).delete();
  }

callDialog() {
  this.dialog.open(this.callDLTDialog);
}

}
