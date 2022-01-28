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
  ngOnInit(): void {
  }
  goToLogin(){
    this.router.navigate([""])
  }


  registerUser() {
    console.log(this.firstname)
    console.log(this.email)
    console.log(this.password);
    console.log(this.phoneNo);
    console.log(this.confirmpassword);

    if(this.password !== this.confirmpassword) {
      alert("Bhadwe password same nhi hai!!")
      return ;

    }

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
    // gather all information : TODO by Neha


    // gather user info;
    // API se information backend ko dedo
    //database save that information

  }

}
