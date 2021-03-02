import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {SpinnerService} from '../../services/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  showSpinner=false;

  constructor(private spinner:SpinnerService, private cdRef:ChangeDetectorRef) {
   }

  ngOnInit() {
    this.init();
  }

  init(){
    this.spinner.getSpinnerObserver().subscribe((status)=>{
      this.showSpinner=status==='start';
      this.cdRef.detectChanges();
    });
  }

}
