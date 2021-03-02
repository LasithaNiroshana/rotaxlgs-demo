import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';
import {BehaviorSubject,Observable,of} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  Url:string
  user:Observable<User>;
  private eventAuthError=new BehaviorSubject<String>("");
  eventAuthError$=this.eventAuthError.asObservable();
  newUser:any;
  id:'';


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
            this.router.navigate(['/adminhome/admindashboard']);
            // console.log('srdfghi');
            alert('You are successfully log in to the system as a admin');
          }
          else if(currentUser.approved == true){
              if(currentUser.role=='Driver'){
                this.router.navigate(['/drivershome']);
                alert('You are successfully log in to the system.');
              }
              else if(currentUser.role=='Sales Agent'){
                this.router.navigate(['/salesagenthome']);
                alert('You are successfully log in to the system.');
              }
              else if(currentUser.role=='Store Keeper'){
                this.router.navigate(['/salesagenthome']);
                alert('You are successfully log in to the system.');
              }}
            else {
              alert('You are not approved to log in to the system. Please contact an administator.');
            }
     });
    }
      });
  }

  createUser(user:User){
    this.afauth.createUserWithEmailAndPassword(user.email,user.password).then(userCredentials=>{
      this.newUser=user;
      userCredentials.user.updateProfile({
        displayName:user.first_name+'  '+user.last_name,
        photoURL:this.Url,
      });
      this.insertUserData(userCredentials).then(()=>{
        this.getUserData(userCredentials).subscribe();
            this.router.navigate(['/notapproved']);
      });
    })
    .catch(error=>{
      this.eventAuthError.next(error);
  });}

  async signOut(){
    await this.afauth.signOut();
    alert('loging out');
    this.router.navigate(['/**']);
  }

  dpurl(url: string){
    this.Url = url;
  }


  insertUserData(userCredentials:firebase.default.auth.UserCredential){
    return this.afs.collection('users').doc(userCredentials.user.uid).set({
      email:this.newUser.email,
      firstName:this.newUser.first_name,
      lastName:this.newUser.last_name,
      id_no:this.newUser.id_no,
      mobileNumber:this.newUser.mobile_no,
      role:this.newUser.role,
      photo_url:this.Url,
      approved:this.newUser.approved
    });
  }

  createAdmin(user:User){
    this.afauth.createUserWithEmailAndPassword(user.email,user.password).then(userCredentials=>{
      this.newUser=user;
      userCredentials.user.updateProfile({
        displayName:user.first_name+'  '+user.last_name,
        photoURL:this.Url,
      });
      this.insertUserData(userCredentials).then(()=>{
        this.getUserData(userCredentials).subscribe();
      });
      }).catch(error=>{
        this.eventAuthError.next(error);}
      );}

  getUserData(userCredentials:firebase.default.auth.UserCredential){
    return this.afs.collection('users').doc(userCredentials.user.uid).valueChanges();
  }

  // canRead(user:User):boolean{
  //   const allowed=['admin','driver','storekeeper','salesagent']
  //   return this.checkAuthorization(user,allowed)
  // }

  // canEdit(user:User):boolean{
  //   const allowed=['admin','driver','storekeeper','salesagent'];
  //   return this.checkAuthorization(user,allowed);
  // }

  // canDelete(user:User):boolean{
  //   const allowed=['admin'];
  //   return this.checkAuthorization(user,allowed);
  // }

  // private checkAuthorization(user:User,allowedRoles:string[]):boolean{
  //   if(!user) return false;
  //     for(const role of allowedRoles){
  //       if(user.role[role]){
  //         return true;
  //       }
  //     }
  //     return false;
  //   }


    getUsers(){
      return this.afs.collection('users',  ref => ref.where('approved', '==', false)).snapshotChanges();
    }

    populateUser(user){
      this.id = user.id;
      console.log(this.id)
      this.afs.collection('users').doc(this.id).update({'approved': true})
      alert('User approved successfully.')
      //  this.edit.onSubmit(order.status, order.id);
     }
  }

