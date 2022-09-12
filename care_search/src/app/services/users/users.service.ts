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

      //this.idSelected = user.id
      return user
    }else{
      return null
    }
  }

  public selectHelper(id:any){
    //this.idSelected = id
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
    console.log(user);
    console.log(_id);
    return axios
      .put(`${this.url}/api/users/${_id}`, user)
      .then((response) => response.data)
      .catch((error) => {
        if (error.response) {
        //console.log(error.response.data.message)
        }
       console.log(error);
      });
  }

   validateUserNameAndPassword(email:string, password:string){
    return axios
          .post(`${this.url}/api/users/email`, { email: email, pass: password })
          .then((response) => (response.data));

      }
  updatePassword(user: any) {
    const id = user._id;
    //console.log(user);
    //console.log(id);
    return axios
      .put(`${this.url}/api/users/${id}`, user)
      .then((response) => response.data)
      .catch((error) => {
        console.log(error);
      });
  }
}
