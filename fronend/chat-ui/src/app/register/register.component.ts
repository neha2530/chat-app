import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

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
  username: string="";     
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


    if(this.firstname && this.email && this.password && this.phoneNo && this.username)
 {
  this.httpClient.post(`${environment.baseUrl}/api/register`,
  {
    firstname: this.firstname,
    email: this.email,
    password:this.password,
    phoneNo:this.phoneNo,
    username:this.username,
  
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
