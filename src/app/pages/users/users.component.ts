import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
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
  approved:true,}
  users:User[];
  routeColumns:string[]=['Name','email', 'mobile_no','edit'];
  constructor(private authService:AuthService, private storage:AngularFireStorage) {
  }

  ngOnInit(): void {
    this.authService.getUsers().subscribe(user=>{
      this.users=[];
      user.forEach(u=>{
        let user:any=u.payload.doc.data();
        user.id=u.payload.doc.id;
        this.users.push(user);
      });
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
    this.authService.createAdmin(this.user);
    this.user.first_name=''
    this.user.last_name=''
    this.user.employee_id=''
    this.user.email=''
    this.user.mobile_no=''
    this.user.password=''
    this.user.role=''
  }

  edit(user){
    this.authService.populateUser(user)
    // this.dialog.open(EditpopupComponent);
  }
}
