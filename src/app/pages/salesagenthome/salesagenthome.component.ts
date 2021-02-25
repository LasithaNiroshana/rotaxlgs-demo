import { Component, OnInit, Output } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute,Router} from '@angular/router';
import {MediaObserver,MediaChange} from '@angular/flex-layout';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-salesagenthome',
  templateUrl: './salesagenthome.component.html',
  styleUrls: ['./salesagenthome.component.scss']
})
export class SalesagenthomeComponent implements OnInit {
  @Output()
  toggleOpen:boolean;
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
  }

  toggleNav(){
    this.toggleOpen=!this.toggleOpen;
  }

  showDashboard(){
    this.router.navigate(['salesagenthometable'],{relativeTo:this.route});
  }


}
