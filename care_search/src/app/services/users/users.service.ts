import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  public url: any = 'http://localhost:3000';
   public idSelected= 0;
 public users = []

  public storage: any = {
    currentUser: {},
    disabledUser: false,
  };

  constructor() {
    if (localStorage.getItem('currentUser')) {
      this.storage.currentUser = JSON.parse(
        localStorage.getItem('currentUser') as string
      );
    }
  }

  getAllUsers() {
    return axios.get(`${this.url}/api/users/`).then((response) => this.users = response.data);
  }

  setCurrentUser(user: any) {
    this.storage.currentUser = user;
    //console.log(this.storage.currentUser);
  }
  public getHelpersById(){
  const uniqueHelper = this.users.find((helper:any)=>{ 
//console.log(helper)
  return helper._id === this.idSelected 
  

 })
//console.log(uniqueHelper)
 return uniqueHelper

 }
  public selectHelper(id:any){
this.idSelected = id
//console.log(typeof this.idSelected)
//this.getHelpersById()
} 


  createNewUser(newUser: any) {
    return axios
      .post(`${this.url}/api/users/`, newUser)
      .then((response) => response.data);
  }

  updateAnUser(user: any) {
    const id = this.storage.currentUser._id;
    //console.log(user);
    console.log(id);
    return axios
      .put(`${this.url}/api/users/${id}`, user)
      .then((response) => response.data)
      .catch((error) => {
        console.log(error);
      });
  }

  updatePassword(user: any) {
    const id = user.id;
    //console.log(user);
    //console.log(id);
    return axios
      .put(`${this.url}/helpers/${id}`, user)
      .then((response) => response.data)
      .catch((error) => {
        console.log(error);
      });
  }
}
