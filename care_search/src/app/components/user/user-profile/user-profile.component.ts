import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../../../services/users/users.service';
import { Router } from '@angular/router';
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

  //success and error message*************/
  public successMessage: string = '';
  public showSuccessMessage: boolean = false;
  public errorMessage: string = '';
  public showErrorMessage: boolean = false;

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
  public checkPasswordUser: string = '';
  public newPassword: string = '';
  public checkNewPassword: string = '';
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

  public optionSelected: string = 'personalData';

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
  

  constructor(private userService: UsersService, private router: Router) {}

  ngOnInit(): void {
    // this.getAllUsers();
    this.initForm();
    //console.log(this.currentUser);
   
    
   
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

  

  // updating user

  onEditClick(user: any, informationType: string) {
     //console.log(`I'm here in update`);
     //console.log(this.user)
  
    user = {
      _id:this.currentUser._id,
      user_Status: false,
      email: this.emailUser,
      pass: this.currentUser.pass,
      name: this.namelUser,
      dni: this.dniUser,
      datebirth: this.dateUser,
      direction: this.streetUser,
      job: this.categoryUser,
      worker: this.currentUser.worker,
      img: this.currentUser.img,
      full_info: this.descriptionUser,
      score: this.currentUser.score,
      city: this.cityUser,
      price: this.priceUser,
      schedule: this.schedule,
    };

    // return this.currentUser = newUser

    switch (informationType) {
      case 'personalData':
        this.successMessage = 'Sus datos personales han sido actualizados';
        break;
      case 'profesionalData':
        this.successMessage = 'Su perfil profesional ha sido actualizado';
        break;
      default:
        this.successMessage = 'Sus datos han sido actualizados';
    }
    //to change password:
    //***************************************************VALIDATIONS ON PROFESIONAL DATA********************************/
    if (this.optionSelected == 'profesionalData') {
      this.showSuccessMessage = true;
      this.userService.updateAnUser(user);
      localStorage.setItem('currentUser', JSON.stringify(user));
    }
   

    //***************************************************VALIDATIONS ON PERSONAL DATA********************************/
    if (this.optionSelected == 'personalData') {
      if (
        this.namelUser == '' ||
        this.dniUser == '' ||
        this.dniUser == '' ||
        this.dateUser == ''
      ) {
        this.showErrorMessage = true;
        this.errorMessage = 'Debes rellenar los datos requeridos';
      } else {
        this.showSuccessMessage = true;
        this.userService.updateAnUser(user);
        localStorage.setItem('currentUser', JSON.stringify(user));
      }
    }
    //***************************************************VALIDATIONS ON ACCOUNT DATA********************************/
    if (this.optionSelected == 'acountData') {
      if (
        this.checkPasswordUser != '' ||
        this.newPassword != '' ||
        this.checkNewPassword != ''
      ) {
        if (
          this.checkPasswordUser == '' ||
          this.newPassword == '' ||
          this.checkNewPassword == ''
        ) {
          this.showErrorMessage = true;
          this.errorMessage =
            'Para cambiar la contraseña debe introducir todos los campos';
        } else {
          if (this.checkPasswordUser != this.currentUser.pass) {
            this.showErrorMessage = true;
            this.errorMessage = 'Su antigua contraseña no es correcta';
          } else {
            if (this.newPassword != this.checkNewPassword) {
              this.showErrorMessage = true;
              this.errorMessage = 'Su nueva contraseña debe coincidir';
            } else {
              user = {
                _id:this.currentUser._id,
                user_Status: false,
                email: this.emailUser,
                pass: this.newPassword,
                name: this.namelUser,
                dni: this.dniUser,
                datebirth: this.dateUser,
                direction: this.streetUser,
                job: this.categoryUser,
                worker: this.currentUser.worker,
                img: this.currentUser.img,
                full_info: this.descriptionUser,
                score: this.currentUser.score,
                city: this.cityUser,
                price: this.priceUser,
                schedule: this.schedule,
              };

              if(this.newPassword.length<6){
                this.showErrorMessage = true;
                this.errorMessage = 'La contraseña debería tener como mínimo 6 caracteres';
              }else{

                this.userService.updateAnUser(user);
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.successMessage = 'Su contraseña ha sido actualizada';
                this.showSuccessMessage = true;
              }

              // console.log('guardado pass')
            }
          }
        }
      } else if (
        this.emailUser != '' &&
        this.emailUser !== this.currentUser.email
      ) {
       
        if(this.emailUser.match('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')){
          this.successMessage = 'Su correo electrónico ha sido actualizado';
          this.showSuccessMessage = true;
          this.userService.updateAnUser(user);
          localStorage.setItem('currentUser', JSON.stringify(user));
          // console.log('guardado email')
        }else{
          this.showErrorMessage = true;
          this.errorMessage = 'El correo electrónico debe ser válido';
        }
       
      } else {
        this.showErrorMessage = true;
        this.errorMessage = 'El correo electrónico es obligatorio';
      }
    }

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

  closeMessage() {
    this.showSuccessMessage = false;
  }
  closeErrorMessage() {
    this.showErrorMessage = false;
  }
  showDeleteMessage() {
    this.deleteMessage = true;
  }
  hideDeleteMessage() {
    this.deleteMessage = false;
  }

  //to disable account***********************************************************************/
  disableAccount(user: any) {
    console.log(`desabled:${user}`);
    user = {
      _id:this.currentUser._id,
      user_Status: true,
      email: this.emailUser,
      pass: this.currentUser.pass,
      name: this.namelUser,
      dni: this.dniUser,
      datebirth: this.dateUser,
      direction: this.streetUser,
      job: this.categoryUser,
      worker: this.currentUser.worker,
      img: this.currentUser.img,
      full_info: this.descriptionUser,
      score: this.currentUser.score,
      city: this.cityUser,
      price: this.priceUser,
      schedule: this.schedule,
    };
    console.log(`desabled:${user}`);

    this.userService.updateAnUser(user);
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.router.navigate(['/']);
  }
}
