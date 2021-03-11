import { Component, OnInit, Output } from '@angular/core';
import {EventEmitter} from '@angular/core'
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dltdialog',
  templateUrl: './dltdialog.component.html',
  styleUrls: ['./dltdialog.component.scss']
})
export class DltdialogComponent implements OnInit {
  @Output()
  okCLicked=new EventEmitter();

  constructor(public dialogRef:MatDialogRef<DltdialogComponent>) { }

  ngOnInit(): void {
  }

  dltItem(){
    this.okCLicked.emit();
  }

  closeDialog(){
    this.dialogRef.close(false);
  }

}
