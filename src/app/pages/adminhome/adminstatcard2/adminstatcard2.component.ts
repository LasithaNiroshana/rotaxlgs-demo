import { Component, OnInit } from '@angular/core';
import { VehiclesService } from 'src/app/services/vehicles.service';

@Component({
  selector: 'app-adminstatcard2',
  templateUrl: './adminstatcard2.component.html',
  styleUrls: ['./adminstatcard2.component.scss']
})
export class Adminstatcard2Component implements OnInit {
  vehicles=[];

  constructor(private vehiclesService:VehiclesService) { }

  ngOnInit(): void {
    this.vehiclesService.getRepVehicles().subscribe(vehi=>{
      this.vehicles=[];
      vehi.forEach(v=>{
        let vehicle:any=v.payload.doc.data();
        vehicle.id=v.payload.doc.id;
        this.vehicles.push(vehicle);
      });
    });
  }



}
