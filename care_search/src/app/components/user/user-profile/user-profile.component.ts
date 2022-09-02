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

  //form values****************************************/
  public user: any = [];
  public namelUser: string = "";
  // public firstSurnameUser: string = "";
  // public secondSurnameUser: string = "";
  public dniUser: string = "";
  public dateUser: string = "";
  // public genreUser: string = "";
  public phoneUser: string = "";
  public emailUser: string = "";
  public passwordUser: string = "";
  public passwordUserVerify: string = "";
  public addressUser: string = "";
  public cityUser: string = "";
  public streetUser: string = "";
  public priceUser: string = "";
  public categoryUser: string = "";
  public descriptionUser: string = "";
  public schedule: string = "";
  public cvFile: string = "";
  public emptyForm: number = 0;
  public salaryRange: number=10;
   //form values****************************************/
  
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
    this.initForm() 
    console.log(this.currentUser)
  
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

/* 
   getAllUsers(){
  this.userService.getAllUsers().then(response => this.users = response);
   } */

  incrementSalary(){

  }

  valueChanged($event:any) {
    this.salaryRange = $event.target.value;
  }

  // current user

// updating user

onEditClick(newUser:any){
  console.log(`I'm here in update`)
  newUser = {
   name:this.namelUser,
   dni: this.dniUser,
   datebirth:this.dateUser,
   city: this.cityUser,
   direction:this.streetUser,
   full_info: this.descriptionUser,
    price:this.priceUser,
    job:this.categoryUser,
    schedule:this.schedule,
    email:"hello@gmail.com"

  }
  this.initForm()

  this.userService.updateAnUser(newUser)
 // return this.currentUser = newUser
 
  
}
  /*init form values:****************************************************************************/
  
   initForm(){
    this.namelUser = this.currentUser.name;
    this.dniUser = this.currentUser.dni;
    this.dateUser = this.currentUser.datebirth;
    this.cityUser = this.currentUser.city;
    this.streetUser = this.currentUser.direction;
    this.descriptionUser = this.currentUser.full_info;
    this.priceUser = this.currentUser.price;
    this.categoryUser = this.currentUser.job;
    this.schedule = this.currentUser.schedule;
    this.emailUser = this.currentUser.email;
    //this.passwordUser = this.currentUser.pass;
   }
}
