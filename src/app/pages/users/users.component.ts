import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users:User[];
  routeColumns:string[]=['Name','email', 'mobile_no','edit'];
  constructor(private authService:AuthService, private afs:AngularFirestore) {
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
}
