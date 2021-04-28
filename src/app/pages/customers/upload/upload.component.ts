import { Component} from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { CusUploadService } from 'src/app/services/cus-upload.service';
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent{
  message = 'Uploading';
  showMessage: boolean = false;
  task: AngularFireUploadTask;
  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadURL: Observable<string>;
  isHovering: boolean;
  isUploading: boolean;
  isUploaded: boolean;
  constructor(private storage: AngularFireStorage, private csv2fire: CusUploadService) {
  this.isUploading = false;
  this.isUploaded = false;
  }
  startUpload(event: FileList) {
  const file = event.item(0);
  // if(file.type.split('/')[1] !== 'csv') {
  // console.error('Unsupported file type!!');
  // }
  this.isUploading = true;
  this.isUploaded = false;
  this.csv2fire.process(file, 'data');
  }

}
