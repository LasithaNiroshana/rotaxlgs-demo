import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  Dstatus:'';
  title = "cloudsSorage";
  selectedFile: File = null;
  fb;
  downloadURL: Observable<string>;
  Url:String

  constructor(private orderServices: OrdersService,
     private storage: AngularFireStorage) { }
  // private orderService : OrdersService 
  ngOnInit(): void {
  }


  onUpload(event){
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
    this.orderServices.updatefrmDriver(this.Dstatus, this.Url);
    alert('Invoice status is updated.')
   }
}