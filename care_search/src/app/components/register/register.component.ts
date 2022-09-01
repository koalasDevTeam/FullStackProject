import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users/users.service';
import { FormControl, FormArray, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: any = [];
  submitted = false;
  public profileUser: boolean =true;
  public professional: string = '';
  public noprofessional: string = '';
  public emailUser: string = '';
  public passwordUser: string = '';
  public privacyUser: string = '';
  public emptyForm: string = '';
  public emptyPrivacy: string = '';
  public newUser: any = {};
  public iAmAProfessional: boolean =true;
  public users:any;
  public profiles: any = [];
 
  public userProfileForm = new FormGroup({
    profileUser: new FormControl(''),
    emailUser: new FormControl(''),
    passwordUser: new FormControl(''),
    privacyUser: new FormControl(''),
  });

  constructor(
    private router: Router, 
    private userService: UsersService, 
    private formBuilder: FormBuilder
    ) {

    }

  ngOnInit(): void {
    this.getAllUsers()
    this.registerForm = this.formBuilder.group({
      profileUser: ['', [Validators.required]],
      emailUser: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      passwordUser: ['', [Validators.required, Validators.minLength(6)]],
      privacyUser: ['', [Validators.required]]
    });
  }

  get message() {
    return this.registerForm.controls;
  }

  checkingIfProfessional(){
  this.iAmAProfessional=false
  this.profileUser = this.iAmAProfessional;
  console.log(`i'm a professional = ${this.iAmAProfessional}`)
  }
  chekingIfUser(){
    this.iAmAProfessional=true
    this.profileUser = this.iAmAProfessional;
    console.log(`i'm a professional = ${this.iAmAProfessional}`)
  }
 getAllUsers(){
    return this.userService.getAllUsers().then((response:any) => console.log(this.users = response)); 
    
  }


  changeCheckbox(event: Event) {
    console.log(event.target);
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
    console.log(`i'm profileUser: ${this.iAmAProfessional}`)
    this.profileUser = this.iAmAProfessional;
    if ((this.emailUser == '') || (this.passwordUser == '')) {
      this.emptyForm = 'Error en el registro, debe rellenar los campos vacíos.';
    } else if (this.privacyUser == '') {
      this.emptyPrivacy = 'Debe aceptar la Política de Privacidad.';
    } else {
      this.newUser = {
        email: `${this.emailUser}`,
        pass: `${this.passwordUser}`,
        name: '',
        work: '',
        worker:`${this.profileUser}`,
        img: './assets/img/users/1.jpg',
        full_info:'',
        score: 0,
        price: ''
      };


      this.userService.createNewUser(this.newUser).then((user) => {
        localStorage.setItem('currentUser', JSON.stringify(user))
        this.userService.setCurrentUser(user)
        this.router.navigate(['/user']);
      });
    }

    this.submitted = true;

      if (this.registerForm.invalid) {
        return;
      }
    
  }
}
