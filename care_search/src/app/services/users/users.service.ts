import { Injectable } from '@angular/core';
import axios  from 'axios';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public url:any= 'http://localhost:3000';

  constructor() { }

  getAllUsers(){
   return axios.get(`${this.url}/helpers`).then(response => response.data)
  }

  // createNewUser(newUSer:any){
  // return axios.post(`${this.url}/helpers`, newUSer).then(response => response.data)
  // }
  // createNewUser(newUser:any){
  //  axios.post(`${this.url}/helpers`, newUser)

  //   .then( (user) => {
  // 		console.log('Usuario añadido con id =' , user.data.id )
	// }) 
  //   .catch( (error) => {
	//   	console.log('Algo salio mal =' , error )
	// })
  
  // }

  createNewUser(newUser:any){
    return axios.post(`${this.url}/helpers`, newUser).then(response => response.data)
  }


  
}
