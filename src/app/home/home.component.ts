import { Component, OnInit } from '@angular/core';
import {IUser} from '../_models/iuser';
import {AuthenticationService} from '../_service/authentication.service';
import {UserService} from '../_service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentUser:IUser;
  users = [];

  constructor(
    private authenticationService: AuthenticationService,
    private userService: UserService
  ) {
    this.currentUser = this.authenticationService.currentUserValue;
  }

  ngOnInit(): void {
  }

}
