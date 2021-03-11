import { Injectable } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DltdialogComponent } from '../shared/dltdialog/dltdialog.component';

@Injectable({
  providedIn: 'root'
})
export class DltdialogService {

  constructor(public dialog:MatDialog) {}

  openDltDialog(){
   return this.dialog.open(DltdialogComponent);
  }

}
