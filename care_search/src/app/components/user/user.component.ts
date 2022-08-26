import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private UsersService:UsersService) { }
  public storage: any;
  public pageSelected : string = 'intro'
  public userIntroIllustration: string = "./assets/img/illustrations/user_intro_illustration.svg"
  public noUserIllustration: string = "./assets/img/illustrations/no_user_illustration.svg"
  public photoUser: string = "";

  ngOnInit(): void {
    this.storage = this.UsersService.storage;
    console.log('sabrina : ', this.storage)
  }

  showProfile(){
    this.pageSelected = 'profile'
  }
  showHistory(){
    this.pageSelected = 'history'
  }
  showNotifications(){
    this.pageSelected = 'notifications'
  }





}
