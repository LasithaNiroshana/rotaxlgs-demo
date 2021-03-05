import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  user:Observable<User>;
  value:string;

  constructor(private router:Router){}
  canActivate():boolean{
return true;
 }


// getValue(val){
// this.value==val;
// }

}
