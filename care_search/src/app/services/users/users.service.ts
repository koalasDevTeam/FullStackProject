import { Injectable } from '@angular/core';
import axios  from 'axios';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public url:any= 'http://localhost:3000';

  public storage : any =  {
    currentUser : {}
  };

  constructor() {
    if(localStorage.getItem('currentUser')){
      this.storage.currentUser = JSON.parse(localStorage.getItem('currentUser') as string)
    }
  }

  getAllUsers(){
   return axios.get(`${this.url}/helpers`).then(response => response.data)
  }



  setCurrentUser(user:any){
    this.storage.currentUser = user
   // console.log(this.storage.currentUser)
  }

  createNewUser(newUser:any){
    return axios.post(`${this.url}/helpers`, newUser).then(response => response.data)

   
  }


  
}
