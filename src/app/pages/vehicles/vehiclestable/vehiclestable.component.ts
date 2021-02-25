import { Component, OnInit,TemplateRef,ViewChild } from '@angular/core';
import {VehiclesService} from '../../../services/vehicles.service';
import {MatDialog} from '@angular/material/dialog';
import { AngularFirestore } from '@angular/fire/firestore';
import { VehicledltdialogComponent } from './vehicledltdialog/vehicledltdialog.component';

@Component({
  selector: 'app-vehiclestable',
  templateUrl: './vehiclestable.component.html',
  styleUrls: ['./vehiclestable.component.scss']
})

export class VehiclestableComponent implements OnInit {
  @ViewChild('callAPIDialog') callAPIDialog: TemplateRef<any>;
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
        console.log(this.vehicles.length);
      });
    });
  }

  deleteVehicle(vehicle){
    // this.afs.collection('vehicles').doc(vehicle.id).delete();
    this.afs.doc(`vehicles/${vehicle.id}`).delete();
    console.log('dggfh');
  }

  printM(){
    console.log('vdfnvjkdfjkvk');
  }

//   openDialog(): void {
//     const dialogRef = this.dialog.open(VehicledltdialogComponent, {
//       width: '250px'});

//     dialogRef.afterClosed().subscribe(result => {
//       // this.deleteVehicle(this.vehicles);
//       this.deleteVehicle(this.vehicles);
//       this.printM();

//     });

// }
callDialog() {
  this.dialog.open(this.callAPIDialog);
}

}
