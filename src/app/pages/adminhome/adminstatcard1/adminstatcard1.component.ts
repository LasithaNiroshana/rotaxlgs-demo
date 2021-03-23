import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/models/vehicles';
import { VehiclesService } from 'src/app/services/vehicles.service';

@Component({
  selector: 'app-adminstatcard1',
  templateUrl: './adminstatcard1.component.html',
  styleUrls: ['./adminstatcard1.component.scss']
})
export class Adminstatcard1Component implements OnInit {
vehicles:Vehicle[];

  constructor(private vehiclesservice: VehiclesService) { }

  ngOnInit(): void {
    this.vehiclesservice.getAvaVehicles().subscribe(vehi=>{
      this.vehicles=[];
      vehi.forEach(v=>{
        let vehicle:any=v.payload.doc.data();
        vehicle.id=v.payload.doc.id;
        this.vehicles.push(vehicle);

      });
    });
  }

}
