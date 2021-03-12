
import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import {MediaObserver,MediaChange} from '@angular/flex-layout';


@Component({
  selector: 'app-storehome',
  templateUrl: './storehome.component.html',
  styleUrls: ['./storehome.component.scss']
})
export class StorehomeComponent implements OnInit {

  @Output()
  toggleOpen:boolean;
  user:firebase.default.User;
  mediaSub:Subscription;
  deviceXs:boolean;
  constructor(private authService:AuthService,
              private router:Router,
              private route:ActivatedRoute,public mediaObserver:MediaObserver) {
   }
   ngOnInit(): void {
    this.authService.getUserState().subscribe(user=>{
      this.user=user;

      this.mediaSub=this.mediaObserver.media$.subscribe((result:MediaChange)=>{
        this.deviceXs=result.mqAlias==='xs'?true:false;
      });
    });
  }

  ngOnDestroy(){
    this.mediaSub.unsubscribe();
  }

  toggleNav(){
    this.toggleOpen=!this.toggleOpen;
  }

  // showDashboard(){
  //   this.router.navigate(['storetable'],{relativeTo:this.route});
  // }


}
