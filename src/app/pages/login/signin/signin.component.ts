import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {User} from '../../../models/user';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  authError:any;
user:User={
  email:'',
  password:''
}
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    // this.authError.eventAuthError$.subscribe(data=>{
    //   this.authError=data;
    // });
  }
  signIn(){
    this.authService.signIn(this.user.email,this.user.password);
    this.user.email='';
    this.user.password='';
  }

}
