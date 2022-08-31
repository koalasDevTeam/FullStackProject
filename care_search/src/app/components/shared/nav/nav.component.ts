import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../../services/users/users.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  public storage: any;
  public mvView: boolean = false;
  // public userName: string = '';

  getMv(value: boolean) {
    this.mvView = value;
  }

  constructor(private Router: Router,private UserService : UsersService) {}

  ngOnInit(): void {
 
    this.storage = this.UserService.storage;
  }

  logOut(){
    localStorage.removeItem('currentUser');
    this.UserService.setCurrentUser({})
    this.Router.navigate(['']);
  }

  
  getUserName(){
    let name:string;
    name = this.storage?.currentUser.name.split(' ')[0]
    return name;
  }

 
}
