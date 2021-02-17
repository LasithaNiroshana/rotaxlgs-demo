import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {User} from '../../models/user';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.scss']
})
export class AdminhomeComponent implements OnInit {
  user:firebase.default.User;
  constructor(private authService:AuthService,private afs:AngularFirestore,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.authService.getUserState().subscribe(user=>{
      this.user=user;
    })
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

}
