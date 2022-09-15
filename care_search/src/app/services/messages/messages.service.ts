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
  public conversations = []
  constructor() {
    
   }


  createNewConversation(newConversation:any){
    return axios
    .post(`${this.url}/api/conversations/`, newConversation)
    .then((response) => response.data);
  }

  getAllConversations(user1:string, user2:string) {
    return axios.get(`${this.url}/api/conversations?user1=${user1}&user2=${user2}`).then((response) => this.conversations = response.data);
  }
  getAnyConversations(user1:string) {
    return axios.get(`${this.url}/api/conversations?user1=${user1}`).then((response) => this.conversations = response.data);
  }

  updateAnConversation(conversation: any) {
    let _id = conversation._id
    console.log('llamaaa a updateee sabrina',_id)
    return axios
      .put(`${this.url}/api/conversations/${_id}`, conversation)
      .then((response) => response.data)
      .catch((error) => {
        if (error.response) {
        console.log(error.response.data.message)
        }
        console.log(error);
      });
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


