import { Injectable } from '@angular/core';
import { io } from 'socket.io-client'
import { environment } from 'src/environments/environment';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  socket: any;
  constructor(private userservice:UserService) { 
    if( this.userservice.isLoggedIn){
      this.connectSocket()
    }
     }


     connectSocket()  {
      const defaultSocketSettings = {
        transports: ['websocket', 'polling'],
        reconnectionAttempts: 5,
        reconnectionDelay: 3000,
      }
      console.log("Initializeing")
    this.socket =  io(`${environment.baseUrl}`, {
        auth: {
          token :`Bearer ${sessionStorage.getItem("token")}`,
        },
        ...defaultSocketSettings,
      })
  
     }
}
