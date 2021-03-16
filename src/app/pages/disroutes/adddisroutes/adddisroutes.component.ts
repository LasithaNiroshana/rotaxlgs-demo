import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  constructor(private disrouteService:DisroutsService,private snackBar:MatSnackBar) { }

  ngOnInit(): void {
  }

  addcities(){
    this.towns.push(this.city);
    this.city="";
    this.towns.forEach(function(value){
    });
  }

  onSubmit(){
    if(this.disroute.route_name!=''
    && this.disroute.cities!=[]){
      this.disrouteService.addDisroutes(this.disroute);
      this.openSnackBar('New route has been added successfully','')

    }else{
       this.openSnackBar('Error occured while adding new route!','');
      }

  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3200,
    });
  }

}
