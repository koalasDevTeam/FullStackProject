import { Injectable } from '@angular/core';
import axios  from 'axios';

@Injectable({
  providedIn: 'root'
})
export class HelpersService {

public url:any= 'http://localhost:3000';
  
 public idSelected= 0;
 public users = []

constructor() {

  }
  // to get all users
getAllUsers(){

  return axios.get(`${this.url}/api/users/`).then(response => this.users = response.data)
 }

public getHelpersById(){
  const uniqueHelper = this.users.find((helper:any)=>{ 

  return parseInt(helper._id) ===  this.idSelected
 

 })

 return uniqueHelper

 }

 public selectHelper(id:number){
this.idSelected = id
this.getHelpersById()
} 


}
