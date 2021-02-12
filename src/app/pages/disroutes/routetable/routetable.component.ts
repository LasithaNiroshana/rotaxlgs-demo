import { Component, OnInit } from '@angular/core';
import { DisroutsService } from 'src/app/services/disroutes.service';
import {Disroute} from '../../../models/disroutes';

@Component({
  selector: 'app-routetable',
  templateUrl: './routetable.component.html',
  styleUrls: ['./routetable.component.scss']
})
export class RoutetableComponent implements OnInit {
  route:Disroute[];
  routeColumns:string[]=['Route_Name','cities', 'edit','delete'];
  constructor(private disroutsService:DisroutsService) {

  }

  ngOnInit(): void {
    this.disroutsService.getRoutes().subscribe(route=>
      {
        console.log(route);
        this.route=route;
      }
      );
  }

  // delete(){
  //   this.disroutsService.deleteRoute(this.route_name);
  // }

}
