import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {
    const token =   sessionStorage.getItem("token") ;;
    this.isLoggedIn = token ? true: false; 
    if(token) {
      this.loggedInUser =  this.extractUserInfoFromToken(token)
    }
   }

  isLoggedIn: boolean = false;
  loggedInUser: any = {};
  extractUserInfoFromToken(token: string) {
    return JSON.parse(atob(token.split('.')[1]));
  }
}
