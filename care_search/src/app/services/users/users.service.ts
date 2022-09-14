import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
    //url when it is on prod:
 // public url: any = 'https://caresearch.herokuapp.com';
  //url when it is on local:
  public url: any = 'http://localhost:3000';
  public idSelected= 0;
  public users = []
  public setErrorMessage:string=""
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
   
  }
  public getHelpersById(){

    if (localStorage.getItem('selectedUser')) {
      const user =  JSON.parse(
        localStorage.getItem('selectedUser') as string
      )
      return user
    }else{
      return null
    }
  }

  public selectHelper(id:any){
    const selectedUser = this.users.find((helper:any)=>{ 
        return helper._id ===  id
      })
    localStorage.setItem('selectedUser', JSON.stringify(selectedUser))

  } 

  createNewUser(newUser: any) {
    return axios
      .post(`${this.url}/api/users/`, newUser)
      .then((response) => response.data);
  }

  updateAnUser(user: any) {
    const _id = this.storage.currentUser._id;
    return axios
      .put(`${this.url}/api/users/${_id}`, user)
      .then((response) => response.data)
      .catch((error) => {
        if (error.response) {
        console.log(error.response.data.message)
        }
        console.log(error);
      });
  }

//only function that return o generate the TOKEN
   validateUserNameAndPassword(email:string, password:string){

    return axios
          .post(`${this.url}/api/users/login`, { email: email, pass: password })
          .then((response) => {
            localStorage.setItem('jwt',(response.data));
            axios.defaults.headers.common['authorization'] = `Bearer ${response.data}` // for all requests
            return response.data}
            );

      }
  updatePassword(user: any) {
    const _id = user._id;
    return axios
      .put(`${this.url}/api/users/${_id}`, user)
      .then((response) => response.data)
      .catch((error) => {
        console.log(error);
      });
  }
}
