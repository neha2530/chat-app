import { HttpClient } from '@angular/common/http';
import { SelectorMatcher } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {Router }from'@angular/router';
import { SocketService } from '../services/socket.service';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private  router: Router , private httpClient: HttpClient,
     private userService: UserService, private socketService: SocketService) {
    this.socketService.socket.on("message", (data: any)=> {
      console.log(data)
    })


  }
  message="";
  sender = "";
  reciever = "";
  searchTxt=""
  userList: any[] = [];
 messageList : any []  = [];
  ngOnInit(): void {

    this.httpClient.get("http://localhost:3000/api/users",  {headers: {"Authorization": `Bearer ${sessionStorage.getItem("token")}`}}
  ).subscribe(
    (data:any)=>{
      this.userList =data.data;
    },
    (error)=>{
        alert(error.error.message)

    }
  )


    

  }
  search(){
    this.httpClient.get(`http://localhost:3000/api/users?searchTxt=${this.searchTxt}`,{headers:{"Authorization":`Bearer ${sessionStorage.getItem("token")}`}} 
    ).subscribe(
      (data:any)=>{
        this.userList=data.data;
      },
      (error)=>{
          alert(error.error.message)
      }
    )
    console.log(this.searchTxt)
  }

  assignReciever(email: string) {
    this.reciever = email;
    this.loadMessgaes();
  }
  
  loadMessgaes() {
    const loggedInUserInfo = this.userService.extractUserInfoFromToken(sessionStorage.getItem('token') || "")
    this.sender = loggedInUserInfo.Email;
    this.httpClient.get(`http://localhost:3000/api/messages?firstPerson=${this.sender}&secondPerson=${this.reciever}`, 
    {headers: {"Authorization": `Bearer ${sessionStorage.getItem("token")}`}}
    ).subscribe(
      (data: any) => {
        this.messageList = data.data;
      },
      (error) => {
        alert(error.error.message)
      }
    )

  }

  SendMessage(){
    if(!this.message ||!this.reciever){
      return;
    }
    
    const loggedInUserInfo = this.userService.extractUserInfoFromToken(sessionStorage.getItem('token') || "")
    console.log(loggedInUserInfo)
    this.sender = loggedInUserInfo.Email;
    this.httpClient.post("http://localhost:3000/api/messages", //this is your first argument
      {message:this.message, sender:  this.sender,reciever: this.reciever }, // this is your second argument
      {headers: {"Authorization": `Bearer ${sessionStorage.getItem("token")}`}} // this is you 3 argument   
      ).subscribe(
      (data:any)=>{
        this.message = "";
        this.loadMessgaes();   
      },
      (error)=>{
          alert(error.error.message)
      }
    )
  
  }
  }






 
