import { Injectable, Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';
import {BehaviorSubject,Observable,of, Subject} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {User} from '../models/user';
import { SpinnerService } from './spinner.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  Url:string
  user:Observable<User>;
  us:firebase.default.User;
  private eventAuthError=new BehaviorSubject<String>("");
  eventAuthError$=this.eventAuthError.asObservable();
  newUser:any;
  id:'';
  adminValue:string;
  isSignedIn=false;
private authAdmin=new Subject<string>();
adminValue$=this.authAdmin.next()
  firebase: any;

  constructor(private afauth:AngularFireAuth,private afs:AngularFirestore,private router:Router,
  private spinner:SpinnerService, private snackBar:MatSnackBar) {
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

  checkUser(){
    this.getUserState().subscribe(us=>{
      this.us=us;
      if(us!=null){
        return true;
      }
      else return false;
    });
  }

  async signIn(email:string, password:string){
    this.spinner.requestStarted();
    await this.afauth.signInWithEmailAndPassword(email,password).catch(error=>
      {
        // this.eventAuthError.next(error);
        this.openSnackBar(error,'');
        this.spinner.requestEnded();
      }).then(userCredentials=>{
        if(userCredentials){
          this.spinner.requestEnded();
        this.getUserData(userCredentials).subscribe((currentUser: any) => {
          //  this.afauth.authState.
          if(currentUser.role=='Admin'){
              this.spinner.requestEnded();
              this.router.navigate(['/adminhome/admindashboard']);
              this.openSnackBar('You Have Successfully Logged Into the System','Role:Admin');
            }
            else if(currentUser.approved == true){
                if(currentUser.role=='Driver'){
                  this.spinner.requestEnded();
                  this.router.navigate(['/drivershome']);
                  this.openSnackBar('You Have Successfully Logged Into the System','Role:Driver');
                }
                else if(currentUser.role=='Sales Agent'){
                  this.spinner.requestEnded();
                  this.router.navigate(['/salesagenthome']);
                  this.openSnackBar('You Have Successfully Logged Into the System As An Admin','Role:Sales Agent');
                }
                else if(currentUser.role=='Store Keeper'){
                  this.spinner.requestEnded();
                  this.router.navigate(['/storehome']);
                  this.openSnackBar('You Have Successfully Logged Into the System','Role:Store Keeper');
                }}
              else {
                this.router.navigate(['/notapproved']);
                this.spinner.requestEnded();
                this.openSnackBar('You Are Not Approved To Log Into The System.','Please Contact An Administrator.');
              }
     });
    }
      });
  }

  createUser(user:User){
    this.spinner.requestStarted();
    this.afauth.createUserWithEmailAndPassword(user.email,user.password).then(userCredentials=>{
      this.newUser=user;
      userCredentials.user.sendEmailVerification();
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
      this.spinner.requestEnded();
      this.openSnackBar(error,'');
  });}

  async signOut(){
    this.spinner.requestStarted();
    await this.afauth.signOut();
    this.spinner.requestEnded();
    this.router.navigate(['/**']);
    this.openSnackBar('You Have Successfully Logged Out','');
  }

  dpurl(url: string){
    this.Url = url;
  }


  insertUserData(userCredentials:firebase.default.auth.UserCredential){
    return this.afs.collection('users').doc(userCredentials.user.uid).set({
      email:this.newUser.email,
      firstName:this.newUser.first_name,
      lastName:this.newUser.last_name,
      employee_id:this.newUser.employee_id,
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
        this.spinner.requestEnded();
        this.eventAuthError.next(error);
      }
      );
      this.spinner.requestEnded();
      this.openSnackBar('Admin Profile Creation Was Successful','');
    }

  getUserData(userCredentials:firebase.default.auth.UserCredential){
    return this.afs.collection('users').doc(userCredentials.user.uid).valueChanges();
  }



  // deleteUser(){
  //   this.afauth.
  // }

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

    openSnackBar(message: string, action: string) {
      this.snackBar.open(message, action, {
        duration: 3200,
      });
    }

    populateUser(user){
      this.id = user.id;
      this.afs.collection('users').doc(this.id).update({'approved': true});
      this.openSnackBar('Successfully approved User','');
      //  this.edit.onSubmit(order.status, order.id);
     }
  }





