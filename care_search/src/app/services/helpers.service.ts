import { Injectable } from '@angular/core';
import axios  from 'axios';

@Injectable({
  providedIn: 'root'
})
export class HelpersService {

  public url:any= 'http://localhost:3000';
  
  public idSelected= 0;


// public getHelpersById(){
//   const uniqueHelper = this.helpers.filter((helper)=>{ 

//    return helper.id ===  this.idSelected
 

//   })
//   console.log(uniqueHelper)
//   return uniqueHelper

// }

public selectHelper(id:any){
this.idSelected = id
//this.getHelpersById()
}

getAllUsers(){
  return axios.get(`${this.url}/helpers`).then(response => response.data)
 }


 constructor() {

  }
}
