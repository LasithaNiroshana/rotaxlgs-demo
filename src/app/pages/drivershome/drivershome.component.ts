import { Component, OnInit, Output } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-drivershome',
  templateUrl: './drivershome.component.html',
  styleUrls: ['./drivershome.component.scss']
})
export class DrivershomeComponent implements OnInit {
  @Output()
  toggleOpen:boolean;
  constructor(private ordersservice:OrdersService,
              private router:Router,
              private route:ActivatedRoute,
              private fireAuth: AngularFireAuth) {
   }
   ngOnInit(): void {
  }

  toggleNav(){
    this.toggleOpen=!this.toggleOpen;
  }

  showDashboard(){
    this.router.navigate(['drivershome'],{relativeTo:this.route});
  }


  }