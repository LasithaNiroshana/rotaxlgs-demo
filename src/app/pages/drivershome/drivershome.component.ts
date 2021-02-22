import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-drivershome',
  templateUrl: './drivershome.component.html',
  styleUrls: ['./drivershome.component.scss']
})
export class DrivershomeComponent implements OnInit {

  constructor(private ordersservice:OrdersService,
    private router:Router,
    private route:ActivatedRoute,
    private fireAuth: AngularFireAuth) {
}
ngOnInit(): void {
}

showDashboard(){
this.router.navigate(['drivertable'],{relativeTo:this.route});
}
}
