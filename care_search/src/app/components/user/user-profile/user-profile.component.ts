import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../../../services/users/users.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  @Input() currentUser?: any;

  public users: any = [];

  //delete account message******/
  public deleteMessage: boolean = false;

  //success message*************/
  public successMessage: string = '';
  public showSuccessMessage: boolean = false;

  //form values****************************************/
  public user: any = [];
  public namelUser: string = '';
  // public firstSurnameUser: string = "";
  // public secondSurnameUser: string = "";
  public dniUser: string = '';
  public dateUser: string = '';
  // public genreUser: string = "";
  public phoneUser: string = '';
  public emailUser: string = '';
  public passwordUser: string = '';
  public passwordUserVerify: string = '';
  public addressUser: string = '';
  public cityUser: string = '';
  public streetUser: string = '';
  public priceUser: string = '';
  public categoryUser: string = '';
  public descriptionUser: string = '';
  public schedule: string = '';
  public cvFile: string = '';
  public emptyForm: number = 0;
  public salaryRange: number = 10;
  //form values****************************************/

  public optionSelected: string = 'acountData';

  optionsWorkArr = [
    { name: 'Cuidador interna a domicilio', value: 1 },
    { name: 'Atencion personal', value: 2 },
    { name: 'Cuidado infantil', value: 3 },
    { name: 'Cuidado a domicilio por hora', value: 4 },
  ];

  optionsSchedule = [
    { name: 'Parcial', value: 1 },
    { name: 'Completa', value: 2 },
    { name: 'Mañana', value: 3 },
    { name: 'Tarde', value: 4 },
  ];

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    // this.getAllUsers();
    this.initForm();
    console.log(this.currentUser);
  }

  showPersonal() {
    this.optionSelected = 'personalData';
  }
  showProfesional() {
    this.optionSelected = 'profesionalData';
  }
  showAcount() {
    this.optionSelected = 'acountData';
  }

  /* 
   getAllUsers(){
  this.userService.getAllUsers().then(response => this.users = response);
   } */

  incrementSalary() {}

  valueChanged($event: any) {
    this.priceUser = $event.target.value;
  }

  // current user

  // updating user

  onEditClick(user: any, informationType:string) {
    console.log(`I'm here in update`);
    user = {
      email: this.emailUser,
      pass : this.currentUser.pass,
      name: this.namelUser,
      dni: this.dniUser,
      datebirth: this.dateUser,
      direction: this.streetUser,
      job: this.categoryUser,
      worker:this.currentUser.worker,
      img:this.currentUser.img,
      full_info: this.descriptionUser,
      score:this.currentUser.score,
      city: this.cityUser,
      price: this.priceUser,
      schedule: this.schedule, 
    };

    this.userService.updateAnUser(user);
    // return this.currentUser = newUser

    switch(informationType){
      case 'personalData':
        this.successMessage = 'Sus datos personales han sido actualizados'
        break;
      case 'profesionalData':
        this.successMessage = 'Su perfil profesional ha sido actualizado'
        break;
      case 'acountData':
        this.successMessage = 'Los datos de su cuenta han sido actualizados'
        break;
      default:
        this.successMessage = 'Sus datos han sido actualizados'
    }

    this.showSuccessMessage = true;
  }
  /*init form values:****************************************************************************/

  initForm() {
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

  closeMessage(){
    this.showSuccessMessage = false;
  }

  showDeleteMessage(){
    this.deleteMessage = true;
  }
  hideDeleteMessage(){
    this.deleteMessage = false;
  }
  
}
