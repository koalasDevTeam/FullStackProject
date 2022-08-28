import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../../../services/users/users.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  @Input() currentUser? : any;
 
 
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
  public emptyForm: number = 0;
  public sliderValue: number=10;

  public salaryRange: string= "";

  public optionSelected : string = 'personalData'

  optionsWorkArr = [
    {name:"Cuidador interna a domicilio", value:1},
    {name:"Atencion personal", value:2},
    {name:"Cuidado infantil", value:3},
    {name:"Cuidado a domicilio por hora", value:4}
  ]

  optionsSchedule = [
    {name:"Parcial", value:1},
    {name:"Completa", value:2},
    {name:"Mañana", value:3},
    {name:"Tarde", value:4}
  ]


  constructor(private userService :UsersService) { }

  ngOnInit(): void {
    // this.getAllUsers();
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

  incrementSalary(){

  }

  valueChanged($event:any) {
    this.sliderValue = $event.target.value; }
}
