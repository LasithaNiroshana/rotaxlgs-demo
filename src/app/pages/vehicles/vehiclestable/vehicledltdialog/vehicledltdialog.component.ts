import { Component, OnInit, Output} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-vehicledltdialog',
  templateUrl: './vehicledltdialog.component.html',
  styleUrls: ['./vehicledltdialog.component.scss']
})
export class VehicledltdialogComponent implements OnInit {
  vehicles=[];

  constructor(public dialogRef: MatDialogRef<VehicledltdialogComponent>) { }

  ngOnInit(): void {}

  deleteVehicle(){
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
