import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {User} from '../../../models/user';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  title = "cloudsSorage";
  selectedFile: File = null;
  fb;
  downloadURL: Observable<string>;
  authError:any;
  user:User={
  first_name:'',
  last_name:'',
  employee_id:'',
  mobile_no:'',
  email:'',
  password:'',
  role:'',
  photo_url:'',
  approved:false
  }

  constructor(private authService:AuthService,
    private storage: AngularFireStorage) { }

  ngOnInit(): void {
    this.authService.eventAuthError$.subscribe(data=>{
      this.authError=data;
    });
  }
  onFileSelected(event){
    var n = Date.now();
    const file = event.target.files[0];
    const filePath = `userdp/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`userdp/${n}`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              this.fb = url;
              this.user.photo_url = url;
              this.authService.dpurl(url);
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

  createUser(){
    // console.log(this.user)
    this.authService.createUser(this.user);
  }

  resetForm(){
    this.user.first_name='';
    this.user.last_name='';
    this.user.employee_id='';
    this.user.email='';
    this.user.mobile_no='';
    this.user.password='';
    this.user.role='';
  }

}
