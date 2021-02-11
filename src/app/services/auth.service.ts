import { Injectable } from '@angular/core';
// import 'rxjs/add/operator/switchMap'
import { Router } from '@angular/router';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import {BehaviorSubject, Observable} from 'rxjs'
import {User} from '../models/user'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private eventAuthError = new BehaviorSubject<string>('');
  eventAuthError$=this.eventAuthError.asObservable();
  user:Observable<User[]>;
  newUser:any;

  constructor(private afauth:AngularFireAuth,private afs:AngularFirestore,private router:Router) {}

  getUserState(){
    return this.afauth.authState;
  }

  signIn(email:string,password:string){
    this.afauth.signInWithEmailAndPassword(email,password).catch(error=>{
      this.eventAuthError.next(error);
    }).then(userCredentials=>{
      if(userCredentials){
        this.router.navigate(['/adminhome']);
      }
    })
  }

  createUser(user:User){
    this.afauth.createUserWithEmailAndPassword(user.email,user.password).then(userCredentials=>{
      this.newUser=user;

      userCredentials.user.updateProfile({
        displayName:user.first_name+''+user.last_name
      });
      this.insertUserData().then(()=>{
        this.router.navigate(['/adminhome']);
      });
    }).catch(error=>{
      this.eventAuthError.next(error);
    })
  }

  insertUserData(){
    return this.afs.doc('users/${userCredentials.user.uid}').set({
      email:this.newUser.email,
      first_name:this.newUser.first_name,
      last_name:this.newUser.last_name,
      role:'admin'
    })
  }
  signOut(){
    return this.afauth.signOut();
  }
}
