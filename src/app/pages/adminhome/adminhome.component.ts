import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {User} from '../../models/user';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.scss']
})
export class AdminhomeComponent implements OnInit {
  user:firebase.default.User;
  constructor(private authService:AuthService,private afs:AngularFirestore,private router:Router) { }

  ngOnInit(): void {
    this.authService.getUserState().subscribe(user=>{
      this.user=user;
    })
  }

  logOut(){
    this.authService.signOut();
  }

}
