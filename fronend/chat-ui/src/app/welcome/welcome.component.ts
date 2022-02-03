import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private httpClient: HttpClient ) { }
  userList: any[] = [];
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

}

