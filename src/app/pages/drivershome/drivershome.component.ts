<<<<<<< HEAD
import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
=======
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdersService } from 'src/app/services/orders.service';
>>>>>>> daf923e88bea9d3d73b6f7224b638e0978adab4c

@Component({
  selector: 'app-drivershome',
  templateUrl: './drivershome.component.html',
  styleUrls: ['./drivershome.component.scss']
})
export class DrivershomeComponent implements OnInit {
<<<<<<< HEAD
@Output()
toggleOpen:boolean;
  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  toggleNav(){
    this.toggleOpen=!this.toggleOpen;
  }

  showDeliveryList(){
    this.router.navigate(['deliverylist'],{relativeTo:this.route});
  }
=======

  constructor(private ordersservice:OrdersService,
    private router:Router,
    private route:ActivatedRoute,
    private fireAuth: AngularFireAuth) {
}
ngOnInit(): void {
}
>>>>>>> daf923e88bea9d3d73b6f7224b638e0978adab4c

showDashboard(){
this.router.navigate(['drivertable'],{relativeTo:this.route});
}
}
