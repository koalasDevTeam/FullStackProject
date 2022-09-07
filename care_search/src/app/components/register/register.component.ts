import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users/users.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: any = [];
  submitted = false;
  public profileUser: boolean =true;
  public emailUser: string = '';
  public nameUser: string = '';
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
    nameUser: new FormControl(''),
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
      profileUser: [''],
      nameUser: ['', [Validators.required]],
      emailUser: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      passwordUser: ['', [Validators.required, Validators.minLength(6)]],
      privacyUser: ['', [Validators.required]]
    });
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
    return this.userService.getAllUsers().then((response:any) => this.users = response); 
    
  }
  
  get message() {
    return this.registerForm.controls;
  }

  validateAndCreateUserWithCredentials() {
    //check if exist already an equal email and password in the json 
    const result = this.users.filter((user:any)=> user.email === this.emailUser)
    this.emptyForm = '';
    console.log(`i'm profileUser: ${this.iAmAProfessional}`)
    this.profileUser = this.iAmAProfessional;

    if (result.length > 0) {
      this.emptyForm = 'El usuario ya se encuentra registrado en nuestra base de datos.';
      return;
    } 

    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    } else {
      this.newUser = {
        user_Status: false,
        email: `${this.emailUser}`,
        pass: `${this.passwordUser}`,
        name: `${this.nameUser}`,
        dni:'',
        datebirth:'',
        city:'',
        direction:'',
        job: '',
        worker:`${this.iAmAProfessional}`,
        img: './assets/img/users/user-default.png',
        full_info:'',
        score: 0,
        price: '10',
        profile: '',
        schedule:''
      };

      this.userService.createNewUser(this.newUser).then((user) => {
        localStorage.setItem('currentUser', JSON.stringify(user))
        this.userService.setCurrentUser(user)
        this.router.navigate(['/user']);
      });
    }
    console.log(JSON.stringify(this.registerForm.value, null, 2));

  }
}
