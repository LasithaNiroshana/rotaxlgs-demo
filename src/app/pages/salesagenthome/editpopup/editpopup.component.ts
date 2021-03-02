import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Order } from 'src/app/models/order';
import {OrdersService} from '../../../services/orders.service'
import { AngularFireStorage } from "@angular/fire/storage";
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-editpopup',
  templateUrl: './editpopup.component.html',
  styleUrls: ['./editpopup.component.scss']
})
export class EditpopupComponent implements OnInit {
Tstatus:'';
title = "cloudsSorage";
selectedFile: File = null;
fb;
downloadURL: Observable<string>;
Url:String

  constructor(private orderServices: OrdersService,
    private dialog: MatDialog,
    private storage: AngularFireStorage) { }
  // private orderService : OrdersService
  ngOnInit(): void {
  }
  onFileSelected(event){
    var n = Date.now();
    const file = event.target.files[0];
    const filePath = `invoices/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`invoices/${n}`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              this.fb = url;
              this.Url = url
            }
            // console.log(this.fb);
          });
        })
      )
      .subscribe(url => {
        if (url) {
          // console.log(url);
        }
      });
  }

  onSubmit(){
    this.orderServices.updatefrmDriver(this.Tstatus, this.Url);
    alert('Invoice status is updated.')
   }

  close(){
    this.dialog.closeAll();
  }
}
