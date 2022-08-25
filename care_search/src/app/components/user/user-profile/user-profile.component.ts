import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users/users.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  public users: any = [];

  public user: any = [];
  public photoUser: string = "";
  public namelUser: string = "";
  public firstSurnameUser: string = "";
  public secondSurnameUser: string = "";
  public dniUser: string = "";
  public dateUser: string = "";
  public genreUser: string = "";
  public phoneUser: string = "";
  public emailUser: string = "";
  public addressUser: string = "";
  public cityUser: string = "";
  public priceUser: string = "";
  public categoryUser: string = "";
  public descriptionUser: string = "";
  public emptyForm: string = "";

  public optionSelected : string = 'personalData'

  constructor(private userService :UsersService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  showPersonal(){
    this.optionSelected = 'personalData'
  }
  showProfesional(){
    this.optionSelected = 'profesionalData'
  }
  showAcount(){
    this.optionSelected = 'acountData'
  }


  getAllUsers(){
    this.userService.getAllUsers().then(response => this.users = response);
  }

 
 

}
