import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {User} from '../../../models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  authError:any;
  user:User={
    first_name:'',
  last_name:'',
  id_no:'',
  mobile_no:'',
  email:'',
  password:'',
  role:''
  }

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.authService.eventAuthError$.subscribe(data=>{
      this.authError=data;
    });
  }

  createUser(){
    this.authService.createUser(this.user);
  }

}
