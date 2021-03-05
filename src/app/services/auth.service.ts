import { Injectable, Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';
import {BehaviorSubject,Observable,of, Subject} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {User} from '../models/user';
import { SpinnerService } from './spinner.service';
import { AdminGuard } from '../guards/admin.guard';


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
  message:'';
  adminValue:string;
  isSignedIn=false;
private authAdmin=new Subject<string>();
adminValue$=this.authAdmin.next()

  constructor(private afauth:AngularFireAuth,private afs:AngularFirestore,private router:Router,
  private spinner:SpinnerService, private ag:AdminGuard) {
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

  async signIn(email:string, password:string){
    this.spinner.requestStarted();
    await this.afauth.signInWithEmailAndPassword(email,password).catch(error=>
      {
        this.eventAuthError.next(error);
      }).then(userCredentials=>{
        if(userCredentials){
        this.getUserData(userCredentials).subscribe((currentUser: any) => {
          //  this.afauth.authState.
          if(currentUser.role=='Admin'){
              this.spinner.requestEnded();
              this.router.navigate(['/adminhome/admindashboard']);
              alert('You have successfully log in to the system as a admin');
            }
            else if(currentUser.approved == true){
                if(currentUser.role=='Driver'){
                  this.spinner.requestEnded();
                  this.router.navigate(['/drivershome']);
                  alert('You are successfully log in to the system.');
                }
                else if(currentUser.role=='Sales Agent'){
                  this.spinner.requestEnded();
                  this.router.navigate(['/salesagenthome']);
                  alert('You are successfully log in to the system.');
                }
                else if(currentUser.role=='Store Keeper'){
                  this.spinner.requestEnded();
                  this.router.navigate(['/salesagenthome']);
                  alert('You are successfully log in to the system.');
                }}
              else {
                this.spinner.requestEnded();
                alert('You are not approved to log in to the system. Please contact an administator.');
              }

     });
    }
      });
  }

  createUser(user:User){
    this.spinner.requestStarted();
    this.afauth.createUserWithEmailAndPassword(user.email,user.password).then(userCredentials=>{
      this.newUser=user;
      userCredentials.user.updateProfile({
        displayName:user.first_name+'  '+user.last_name,
        photoURL:this.Url,
      });
      this.insertUserData(userCredentials).then(()=>{
        this.getUserData(userCredentials).subscribe();
        this.spinner.requestEnded();
            this.router.navigate(['/notapproved']);
      });
    })
    .catch(error=>{
      this.eventAuthError.next(error);
  });}

  async signOut(){
    this.spinner.requestStarted();
    await this.afauth.signOut().then(()=>{
      this.router.navigate(['/']);
    });
    this.isSignedIn=false;

    this.spinner.requestEnded();
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
    this.spinner.requestStarted();
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
      );
      this.spinner.requestStarted();
    }

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

  // adminAuth(userCredentials){
  //  if(userCredentials){
  //    this.getUserData(userCredentials).subscribe((currentUser:any)=>{
  //      if(currentUser.role=='Admin'){
  //       this.adminValue='Admin';
  //       this.ag.getValue(this.adminValue);
  //      }
  //      else{
  //       this.adminValue='Not Admin';
  //       this.ag.getValue(this.adminValue);
  //      }
  //    });
  //  }
  // }


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





