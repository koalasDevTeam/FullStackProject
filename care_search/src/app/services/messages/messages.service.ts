import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  public url: any = 'http://caresearch.herokuapp.com';
  public messages = []
  constructor() {
    
   }

  createNewMessage(newMessage: any) {
    return axios
      .post(`${this.url}/api/messages/`, newMessage)
      .then((response) => response.data);
  }

  getAllMessages() {
    return axios.get(`${this.url}/api/messages/`).then((response) => this.messages = response.data);
  
  }

}


