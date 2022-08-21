import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user: any = [];
  public emailUser: string = "";
  public passwordUser: string = "";
  public privacyUser: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  save() {
    this.user.push({
      name: this.emailUser,
      password: this.passwordUser,
      privacy: this.privacyUser
    });
    console.log(this.user);
  }

}
