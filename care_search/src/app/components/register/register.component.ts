import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users/users.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  public profileUser: string = '';
  public emailUser: string = '';
  public passwordUser: string = '';
  public privacyUser: string = '';
  public emptyForm: string = '';
  public emptyPrivacy: string = '';
  public newUser: any = {};
  public iAmAProfessional: boolean =true
  public users:any
 

  constructor(
    private router: Router, 
    private userService: UsersService, 
   
    ) {

    }

  ngOnInit(): void {this.getAllUsers()}

  checkingIfProfessional(){
  this.iAmAProfessional=false
  console.log(`i'm a professional = ${this.iAmAProfessional}`)
  }
  chekingIfUser(){
    this.iAmAProfessional=true
    console.log(`i'm a professional = ${this.iAmAProfessional}`)
  }
 getAllUsers(){
    return this.userService.getAllUsers().then((response:any) => console.log(this.users = response)); 
    
  }
  validateAndCreateUserWithCredentials() {
    //check if exist already an equal email and password in the json 
    const result = this.users.filter((user:any)=> user.email === this.emailUser && user.pass === this.passwordUser)
    if(result.length > 0){
      console.log(`you're aready registed`)
      return 
    }
    this.emptyForm = '';
    this.emptyPrivacy = '';
    console.log(`i'm profileUser: ${this.profileUser}`)
    if ((this.emailUser == '') || (this.passwordUser == '') || (this.profileUser == '')) {
      this.emptyForm = 'Error en el registro, debe rellenar los campos vacíos.';
    } else if (this.privacyUser == '') {
      this.emptyPrivacy = 'Debe aceptar la Política de Privacidad.';
    } else {
      this.newUser = {
        email: `${this.emailUser}`,
        pass: `${this.passwordUser}`,
        name: '',
        work: '',
        worker:`${this.iAmAProfessional}`,
        img: './assets/img/users/1.jpg',
        full_info:'',
        score: 0,
        price: '',
        profile: ''
      };


      this.userService.createNewUser(this.newUser).then((user) => {
        localStorage.setItem('currentUser', JSON.stringify(user))
        this.userService.setCurrentUser(user)
        this.router.navigate(['/user']);
      });
    }
    
  }
}
