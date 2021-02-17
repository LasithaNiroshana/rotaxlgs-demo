import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  authError:any;
email:string;
password:string;
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }
  signIn(){
    // this.authService.signIn(this.email,this.password);
  }

}
