import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore,AngularFirestoreDocument} from '@angular/fire/firestore';
import {BehaviorSubject,Observable,of} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {User} from '../models/user';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user:Observable<User>;
  private eventAuthError=new BehaviorSubject<String>("");
  eventAuthError$=this.eventAuthError.asObservable();
  newUser:any;


  constructor(private afauth:AngularFireAuth,private afs:AngularFirestore,private router:Router) {
    this.user=this.afauth.authState;
    this.user.pipe(switchMap(u=>{
      if(u){
        return this.afs.doc<User>('users/${user.uid}').valueChanges();
      }
      else{
        return of(null);
      }
    }));
  }

  getUserState(){
    return this.afauth.authState;
  }

  signIn(email:string, password:string){
    this.afauth.signInWithEmailAndPassword(email,password).catch(error=>
      {
        this.eventAuthError.next(error);
      }).then(userCredentials=>{
        if(userCredentials){
        this.getUserData(userCredentials).subscribe((currentUser: any) => {
          if(currentUser.role=='Admin'){
            this.router.navigate(['/adminhome']);
          }
          else if(currentUser.role=='Driver'){
            this.router.navigate(['/drivershome']);
          }
          else if(currentUser.role=='Sales Agent'){
            this.router.navigate(['/salesagenthome']);
          }
          else{
            this.router.navigate(['/salesagenthome']);
          }
     });

        }
      });
  }



  createUser(user:User){
    this.afauth.createUserWithEmailAndPassword(user.email,user.password).then(userCredentials=>{
      this.newUser=user;
      userCredentials.user.updateProfile({
        displayName:user.first_name+'  '+user.last_name
      });
      this.insertUserData(userCredentials).then(()=>{
        this.getUserData(userCredentials).subscribe((currentUser: any) => {
          if(currentUser.role=='Admin'){
            this.router.navigate(['/adminhome']);
          }
          else if(currentUser.role=='Driver'){
            this.router.navigate(['/drivershome']);
          }
          else if(currentUser.role=='Sales Agent'){
            this.router.navigate(['/salesagenthome']);
          }
          else{
            this.router.navigate(['/salesagenthome']);
          }
     });
      });
    })
    .catch(error=>{
      this.eventAuthError.next(error);
  });}

  signOut(){
    return this.afauth.signOut().then(()=>
    {
      this.router.navigate(['/mainlogin']);
    });
  }

  insertUserData(userCredentials:firebase.default.auth.UserCredential){
    return this.afs.collection('users').doc(userCredentials.user.uid).set({
      email:this.newUser.email,
      firstName:this.newUser.first_name,
      lastName:this.newUser.last_name,
      id_no:this.newUser.id_no,
      mobileNumber:this.newUser.mobile_no,
      role:this.newUser.role
    });
  }

  getUserData(userCredentials:firebase.default.auth.UserCredential){
    return this.afs.collection('users').doc(userCredentials.user.uid).valueChanges();
  }



  canRead(user:User):boolean{
    const allowed=['admin','driver','storekeeper','salesagent']
    return this.checkAuthorization(user,allowed)
  }

  canEdit(user:User):boolean{
    const allowed=['admin','driver','storekeeper','salesagent'];
    return this.checkAuthorization(user,allowed);
  }

  canDelete(user:User):boolean{
    const allowed=['admin'];
    return this.checkAuthorization(user,allowed);
  }

  private checkAuthorization(user:User,allowedRoles:string[]):boolean{
    if(!user) return false;
      for(const role of allowedRoles){
        if(user.role[role]){
          return true;
        }
      }
      return false;
    }
  }

