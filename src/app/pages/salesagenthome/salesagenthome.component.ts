import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/models/order';
import { OrdersService } from 'src/app/services/orders.service';
import {AngularFireAuth} from '@angular/fire/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-salesagenthome',
  templateUrl: './salesagenthome.component.html',
  styleUrls: ['./salesagenthome.component.scss']
})
export class SalesagenthomeComponent implements OnInit {
  @Output()
  user:firebase.default.User;
  toggleOpen:boolean;
  constructor(private authService:AuthService,
              private router:Router,
              private route:ActivatedRoute) {
   }
   ngOnInit(): void {
<<<<<<< HEAD
    this.authService.getUserState().subscribe(user=>{
      this.user=user;});
=======
    // this.authService.getUserState().subscribe(user=>{
    //   this.user=user[];});
>>>>>>> 9623c141b22d9b35645ab2d46ab3c72d3291d7e6
  }

  toggleNav(){
    this.toggleOpen=!this.toggleOpen;
  }

  showDashboard(){
    this.router.navigate(['salesagenthometable'],{relativeTo:this.route});
  }


}
