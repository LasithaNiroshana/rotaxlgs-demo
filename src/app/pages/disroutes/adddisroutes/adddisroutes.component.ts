import { Component, OnInit } from '@angular/core';
import {Disroute} from '../../../models/disroutes';
import {DisroutsService} from '../../../services/disroutes.service';

@Component({
  selector: 'app-adddisroutes',
  templateUrl: './adddisroutes.component.html',
  styleUrls: ['./adddisroutes.component.scss']
})
export class AdddisroutesComponent implements OnInit {
  city="";
  towns:any[]=[];

  disroute: Disroute={
    route_name:'',
    cities:this.towns
  }
  constructor(private disrouteService:DisroutsService) { }

  ngOnInit(): void {
  }

  addcities(){
    this.towns.push(this.city);
    this.city="";
    this.towns.forEach(function(value){
      console.log(value);
    })
  }

  onSubmit(){
    if(this.disroute.route_name!=''
    && this.disroute.cities!=[]){
      this.disrouteService.addDisroutes(this.disroute);
      alert('New route has been added successfully');
      
    }else{ alert('error adding the route')}
    
  }



}
