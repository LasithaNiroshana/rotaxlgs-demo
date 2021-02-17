import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-viewcustomers',
  templateUrl: './viewcustomers.component.html',
  styleUrls: ['./viewcustomers.component.scss']
})
export class ViewcustomersComponent implements OnInit {

  constructor(private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  showAddCustomer(){
    this.router.navigate(['addcustomers'],{relativeTo:this.route});
  }

}
