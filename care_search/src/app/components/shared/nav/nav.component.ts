import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users/users.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  public storage: any;
  public mvView: boolean = false;

  getMv(value: boolean) {
    this.mvView = value;
  }

  constructor(private UserService : UsersService) {}

  ngOnInit(): void {
 
    this.storage = this.UserService.storage;
   
  }

  logOut(){
    localStorage.removeItem('currentUser');
    this.UserService.setCurrentUser({})
  }
}
