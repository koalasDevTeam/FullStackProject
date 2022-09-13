import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  //url when it is on prod:
 // public url: any = 'https://caresearch.herokuapp.com';
  //url when it is on local:
  public url: any = 'http://localhost:3000';
  public messages = []
  constructor() {
    
   }

  createNewMessage(newMessage: any) {
    return axios
      .post(`${this.url}/api/messages/`, newMessage)
      .then((response) => response.data);
  }

  getAllMessages(userId:string) {
    return axios.get(`${this.url}/api/messages?userId=${userId}`).then((response) => this.messages = response.data);
  
  }

}


