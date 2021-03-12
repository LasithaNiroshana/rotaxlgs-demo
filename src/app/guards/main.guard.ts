import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class MainGuard implements CanActivate {
  user:firebase.default.User;

  constructor(private auth:AuthService, private route:Router,private afs:AngularFirestore){}

  canActivate():boolean{
    if(this.auth.getUserState().subscribe(user=>{
      this.user=user;
    })){
      return true;
    }
   else return false;
  }

}


