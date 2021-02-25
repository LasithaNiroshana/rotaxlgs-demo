import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute,Router} from '@angular/router';
import {MediaObserver,MediaChange} from '@angular/flex-layout';
import {Subscription} from 'rxjs';
@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.scss']
})
export class AdminhomeComponent implements OnInit,OnDestroy {
  @Output()
  toggleOpen:boolean;
  user:firebase.default.User;
  mediaSub:Subscription;
  deviceXs:boolean;
  constructor(private authService:AuthService,private afs:AngularFirestore,private router:Router,
    private route:ActivatedRoute, public mediaObserver:MediaObserver) { }

  ngOnInit(): void {
    this.authService.getUserState().subscribe(user=>{
      this.user=user;
      this.mediaSub=this.mediaObserver.media$.subscribe((result:MediaChange)=>{
        console.log(result.mqAlias);
        this.deviceXs=result.mqAlias==='xs'?true:false;
      });
    });
  }

  ngOnDestroy(){
    this.mediaSub.unsubscribe();
  }

  showDashboard(){
    this.router.navigate(['admindashboard'],{relativeTo:this.route});
  }

  showCustomers(){
    this.router.navigate(['viewcustomers'],{relativeTo:this.route});
  }

  showDrivers(){
    this.router.navigate(['viewdrivers'],{relativeTo:this.route})
  }

  showOrders(){
    this.router.navigate(['vieworders'],{relativeTo:this.route})
  }

  showRoutes(){
    this.router.navigate(['viewdisroutes'],{relativeTo:this.route});
  }

  showSalesAgents(){
    this.router.navigate(['viewsalesagents'],{relativeTo:this.route})
  }

  showVehicles(){
    this.router.navigate(['viewvehicles'],{relativeTo:this.route})
  }

  logOut(){
    this.authService.signOut();
  }

  toggleNav(){
    this.toggleOpen=!this.toggleOpen;
  }

}
