import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-drivershome',
  templateUrl: './drivershome.component.html',
  styleUrls: ['./drivershome.component.scss']
})
export class DrivershomeComponent implements OnInit {
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

}
