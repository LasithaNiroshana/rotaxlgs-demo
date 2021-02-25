import { Component, OnInit, Output } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import {MediaObserver,MediaChange} from '@angular/flex-layout';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-drivershome',
  templateUrl: './drivershome.component.html',
  styleUrls: ['./drivershome.component.scss']
})
export class DrivershomeComponent implements OnInit {
  @Output()
  user:firebase.default.User;
  toggleOpen:boolean;
  mediaSub:Subscription;
  deviceXs:boolean;
  constructor(private router:Router,private route:ActivatedRoute,
    private authService:AuthService,private afs:AngularFirestore,
    public mediaObserver:MediaObserver) {
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
    this.router.navigate(['drivershome'],{relativeTo:this.route});
  }
}
