import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-store-home',
  templateUrl: './store-home.component.html',
  styleUrls: ['./store-home.component.scss']
})
export class StoreHomeComponent implements OnInit {
  @Output()
  user:firebase.default.User;
  toggleOpen:boolean;
  constructor(private authService:AuthService,
              private router:Router,
              private route:ActivatedRoute) {
   }
   ngOnInit(): void {
    // this.authService.getUserState().subscribe(user=>{
    //   this.user=user[];});
  }

  toggleNav(){
    this.toggleOpen=!this.toggleOpen;
  }

  // showDashboard(){
  //   this.router.navigate(['storetable'],{relativeTo:this.route});
  // }


}
