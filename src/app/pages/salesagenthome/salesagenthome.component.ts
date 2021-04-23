import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/models/order';
import { OrdersService } from 'src/app/services/orders.service';
import {AngularFireAuth} from '@angular/fire/auth';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';
import { MediaChange, MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'app-salesagenthome',
  templateUrl: './salesagenthome.component.html',
  styleUrls: ['./salesagenthome.component.scss']
})
export class SalesagenthomeComponent implements OnInit {
  @Output()
  user:firebase.default.User;
  toggleOpen:boolean;
  mediaSub:Subscription;
  deviceXs:boolean;
  userCredentials:any;
  constructor(private router:Router,private route:ActivatedRoute,
    private authService:AuthService,private afs:AngularFirestore,
    public mediaObserver:MediaObserver) {
   }
   ngOnInit(): void {
    this.authService.getUserState().subscribe(user=>{
      this.user=user;
    });
    this.mediaSub=this.mediaObserver.media$.subscribe((result:MediaChange)=>{
      this.deviceXs=result.mqAlias==='xs'?true:false;
    });
  }

  toggleNav(){
    this.toggleOpen=!this.toggleOpen;
  }

  showDashboard(){
    this.router.navigate(['salesagenthometable'],{relativeTo:this.route});
  }


}
