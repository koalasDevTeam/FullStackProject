import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  public url: any = 'http://localhost:3000';

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
    return axios.get(`${this.url}/api/users/`).then((response) => response.data);
  }

  setCurrentUser(user: any) {
    this.storage.currentUser = user;
    //console.log(this.storage.currentUser);
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
}
