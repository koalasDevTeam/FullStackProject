import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }
  public pageSelected : string = 'intro'
  public userIntroIllustration: string = "./assets/img/illustrations/user_intro_illustration.svg"

  ngOnInit(): void {
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
