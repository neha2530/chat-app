import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private httpClient: HttpClient) { }

  firstname: string = "";
  email: string = "";
  password=""  ;
  confirmpassword="";
  phoneNo="";
  passwordMistmatch: string =  "";         
  ngOnInit(): void {
  }
  goToLogin(){
    this.router.navigate([""])
  }

  checkPassword() {
    if(this.password !== this.confirmpassword) {
      this.passwordMistmatch = "Password is not same";
    } else {
      this.passwordMistmatch = "";
    }
   }

  registerUser() {
    

    if(this.password !== this.confirmpassword) {
      alert("Bhadwe password same nhi hai!!")
      return ;

    }


    if(this.firstname && this.email && this.password && this.phoneNo)
 {
  this.httpClient.post("http://localhost:3000/api/register",
  {
    firstname: this.firstname,
    email: this.email,
    password:this.password,
    phoneNo:this.phoneNo,
  
  }).subscribe(
    (data:any)=>{
     alert(data.message)
    },
    (error)=>{
      alert(error.error.message)
    }
  )
 } else {
   alert("Form is invalid")
 }
   
    // gather all information : TODO by Neha


    // gather user info;
    // API se information backend ko dedo
    //database save that information

  }

}
