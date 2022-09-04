import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users/users.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public userDisabled: boolean = false;
  public currentUser:any;

  constructor(public UsersService: UsersService, private router: Router) { }

  ngOnInit(): void {
    //console.log('here',this.UsersService.storage.disabledUser)

    if(this.UsersService.storage.currentUser.disable){
      this.userDisabled = true;
    }

    this.currentUser = this.UsersService.storage.currentUser;

    console.log(this.userDisabled)
  }


  repairAccount(user:any){

    user = {
      email: this.currentUser.email,
      pass: this.currentUser.pass,
      name: this.currentUser.name,
      dni: this.currentUser.dni,
      datebirth: this.currentUser.datebirth,
      direction: this.currentUser.direction,
      job: this.currentUser.job,
      worker: this.currentUser.worker,
      img: this.currentUser.img,
      full_info: this.currentUser.full_info,
      score: this.currentUser.score,
      city: this.currentUser.city,
      price: this.currentUser.price,
      schedule: this.currentUser.schedule,
    };
    this.UsersService.updateAnUser(user);
    localStorage.setItem('currentUser', JSON.stringify(user))
    this.router.navigate(['/user'])
  }

  closeAdvice(){
    this.userDisabled=false;
    this.UsersService.setCurrentUser({})
    localStorage.removeItem('currentUser');
  }



}
