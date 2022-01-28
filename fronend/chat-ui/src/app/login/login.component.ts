import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:  Router, private HttpClient: HttpClient)  { }
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
    console.log(this.email);
    console.log(this.password)

  this.HttpClient.post("http://localhost:3000/api/login",{
  email: this.email,
  password:this.password,
  }).subscribe(
    (data) => { 
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
