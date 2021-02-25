import { Component, OnInit, Output } from '@angular/core';
<<<<<<< HEAD
import {AuthService} from '../../services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute,Router} from '@angular/router';
import {MediaObserver,MediaChange} from '@angular/flex-layout';
import {Subscription} from 'rxjs';
=======
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/models/order';
import { OrdersService } from 'src/app/services/orders.service';
import {AngularFireAuth} from '@angular/fire/auth';
import { AuthService } from 'src/app/services/auth.service';
>>>>>>> 0d6dee6e0d99e22c4348dd5da765c35c31930fc8

@Component({
  selector: 'app-salesagenthome',
  templateUrl: './salesagenthome.component.html',
  styleUrls: ['./salesagenthome.component.scss']
})
export class SalesagenthomeComponent implements OnInit {
  @Output()
  user:firebase.default.User;
  toggleOpen:boolean;
<<<<<<< HEAD
  user:firebase.default.User;
  mediaSub:Subscription;
  deviceXs:boolean;
  constructor(private authService:AuthService,private afs:AngularFirestore,private router:Router,
    private route:ActivatedRoute, public mediaObserver:MediaObserver) {
   }
   ngOnInit(): void {
    this.authService.getUserState().subscribe(user=>{
      this.user=user;
      this.mediaSub=this.mediaObserver.media$.subscribe((result:MediaChange)=>{
        this.deviceXs=result.mqAlias==='xs'?true:false;
      });
    });
=======
  constructor(private authService:AuthService,
              private router:Router,
              private route:ActivatedRoute,
              private fireAuth: AngularFireAuth) {
   }
   ngOnInit(): void {
    this.authService.getUserState().subscribe(user=>{
      this.user=user;});
>>>>>>> 0d6dee6e0d99e22c4348dd5da765c35c31930fc8
  }

  toggleNav(){
    this.toggleOpen=!this.toggleOpen;
  }

  showDashboard(){
    this.router.navigate(['salesagenthometable'],{relativeTo:this.route});
  }


}
