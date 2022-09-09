import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users/users.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public user_status: boolean = false;
  public currentUser:any;
  public checkUser:any;

  constructor(public UsersService: UsersService, private router: Router,) { }

  ngOnInit(): void {
    //console.log('here',this.UsersService.storage.disabledUser)
     if (localStorage.getItem('currentUser')) {
      this.checkUser = JSON.parse(
        localStorage.getItem('currentUser') as string
      );
    }

    if(this.checkUser?.user_Status){
      this.user_status = true;
    }

    this.currentUser = this.UsersService.storage.currentUser;

    
  }


  repairAccount(user:any){

    user = {
      user_Status:false,
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
    this.user_status=false;
    this.UsersService.setCurrentUser({})
    localStorage.removeItem('currentUser');
  }



}
