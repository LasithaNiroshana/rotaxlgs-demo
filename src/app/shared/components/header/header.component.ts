import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import {AuthService} from '../../../services/auth.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output()
  toggleClicked=new EventEmitter();
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  logOut(){
    this.authService.signOut();
  }

  toggleNav(){
    this.toggleClicked.emit();
  }

}
