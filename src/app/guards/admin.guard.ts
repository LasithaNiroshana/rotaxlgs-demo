import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  user:Observable<User>;

  constructor(private authService:AuthService,private router:Router){}
  canActivate(userCredentials):boolean{
    this.authService.getUserData(userCredentials).subscribe((currentUser:any)=>{
      currentUser.role=='Admin'?true:false;
    }
    )
    return true;
  }
}
