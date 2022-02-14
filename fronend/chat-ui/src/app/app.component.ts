import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router:Router,public userService:UserService){}
  title = 'chat-ui';
  signOut(){
    this.userService.isLoggedIn=false;
    this.userService.loggedInUser = {};
    sessionStorage.removeItem("token")
    this.router.navigate([""])
  }
}
