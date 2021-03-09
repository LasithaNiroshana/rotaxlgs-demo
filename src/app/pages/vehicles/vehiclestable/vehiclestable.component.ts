import { Component, OnInit,TemplateRef,ViewChild } from '@angular/core';
import {VehiclesService} from '../../../services/vehicles.service';
import { AngularFirestore } from '@angular/fire/firestore';
import {MatDialog} from '@angular/material/dialog';
import {Vehicle} from '../../../models/vehicles';


@Component({
  selector: 'app-vehiclestable',
  templateUrl: './vehiclestable.component.html',
  styleUrls: ['./vehiclestable.component.scss']
})

export class VehiclestableComponent implements OnInit {
  @ViewChild('callDLTDialog') callDLTDialog: TemplateRef<any>;
  @ViewChild('callEDITDialog') callEDITDialog: TemplateRef<any>;
  vehicles=[];
  editVehicle=[];
  veh:Vehicle={
    vehicle_no:'',
    revenuelicense_no:'',
    revenuelicense_expiry:new Date(),
    insurance_expiry:new Date(),
    telephone_no:'',
    vehicle_size:'',
    insurance_tel:'',
    insurance_company:'',
    }
  vehiclesColumns:string[]=['vehicle_no','rl_no','rl_expiry','vehicle_size','tel_no','edit','delete'];
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

  updateVehicle(vehicle){

    this.afs.doc(`vehicles/${vehicle.id}`).update(vehicle);
    console.log('dggfh');
  }

  deleteVehicle(vehicle){
    this.afs.doc(`vehicles/${vehicle.id}`).delete();
  }

callDialog() {
  this.dialog.open(this.callDLTDialog);
}

callEditDialog() {
  this.dialog.open(this.callEDITDialog);
}

// onSubmit(){
//   if(
//     this.veh.vehicle_no!=''
//     && this.veh.revenuelicense_no!=''

//     // && this.vehicle.company_name!=''
//     // && this.vehicle.address_ln1!=''
//     // && this.vehicle.address_ln2!=''
//     // && this.vehicle.city!=''
//     // && this.vehicle.telephone_no!=''
//   ){
//     this.vehiclesservice.addVehicle(this.veh);
//     alert('Vehicle has been added successfully');
//     console.log(this.veh);
//     this.veh.vehicle_no='';
//     this.veh.revenuelicense_no='';
//     this.veh.telephone_no='';
//   }
//   else{
//     alert('Error adding new vehicle');
//   }

//     }


}
