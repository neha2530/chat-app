import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:  Router, private HttpClient: HttpClient, private userService: UserService)  { }
  email :string="";
  password="";


  ngOnInit(): void {
  }

  gotToRegister() {
    this.router.navigate(["register"])
  }
  sayYesIm(){
    
    this.router.navigate(["y"])
  }

  goToWelcome() {
    


  this.HttpClient.post("http://localhost:3000/api/login",{
  email: this.email,
  password:this.password,
  }).subscribe(
    (data :any) => { 
      this.userService.isLoggedIn=true
     sessionStorage.setItem("token", data.token)
      const token =  sessionStorage.getItem("token")
      if(token) {
        this.userService.loggedInUser = this.userService.extractUserInfoFromToken( token || "" );
      }
      this.router.navigate(["welcome"]) 
  },
    (error) => { 
      alert(error.error.message)
    }
  );
    // gather info....
    // API backed
    //
    
  }
}
