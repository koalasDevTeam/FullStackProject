import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users/users.service';

import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  forgetForm: any = [];
  submitted = false;
  public emailUser: string = '';
  public passwordUser: string = '';
  public passwordUserVerify: string = '';
  public emptyForm: string = '';
  public newUser: any = {};
  public users : any =[];
  public user : any =[];
  public idUser: any = '';
  public prueba: any = '';

  public userProforgetFormfileForm = new FormGroup({
    emailUser: new FormControl(''),
    passwordUser: new FormControl(''),
    passwordUserVerify: new FormControl(''),
  });
  
  constructor(private router: Router, private userService: UsersService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.getAllUsers();
    this.forgetForm = this.formBuilder.group({
      emailUser: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      passwordUser: ['', [Validators.required, Validators.minLength(6)]],
      passwordUserVerify: ['', [Validators.required]]
    });
  }

  getAllUsers(){
    type Person = {
      city: string,
      datebirth: string,
      direction: string,
      dni: string,
      email: string,
      full_info: string,
      id: string,
      img: string,
      job: string,
      name: string,

      price: string,
      schedule: string,
      score: number,
      worker: boolean
    }
    this.userService.getAllUsers().then(response => {
      this.users = response;
    });
  }

  get message() {
    return this.forgetForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.forgetForm.invalid) {
      return;
    }
    //console.log(JSON.stringify(this.forgetForm.value, null, 2));
  }

  save() {
    this.emptyForm = '';
    let user = this.users.find((correct:any) => correct.email === this.emailUser);
    //console.log(user?.lenght);
    if (user) {
      if ((this.emailUser != '') && (this.passwordUser != '') && (this.passwordUser == this.passwordUserVerify)) {
        this.idUser = user.id;
        this.user = {
          id: this.idUser,
          email: user.email,
          pass : this.passwordUser,
          name: user.name,
          dni: user.dni,
          datebirth: user.datebirth,
          direction: user.direction,
          job: user.job,
          worker: user.worker,
          img: user.img,
          full_info: user.full_info,
          score: user.score,
          city: user.city,
          price: user.price,
          schedule: user.schedule
        };
        this.userService.updatePassword(this.user);
        localStorage.setItem('currentUser', JSON.stringify(user))
        this.userService.setCurrentUser(user)
        this.router.navigate(['/user'])
      } else if (this.passwordUser != this.passwordUserVerify) {
        this.emptyForm = "Las contraseñas no coinciden.";
      }
    } else if ((this.emailUser != '') && (this.passwordUser != '') && (this.passwordUserVerify != '')) {
      this.emptyForm = "El usuario no se encuentra registrado en nuestra base de datos.";
    }

    this.submitted = true;
      if (this.forgetForm.invalid) {
        return;
      }
      //console.log(JSON.stringify(this.forgetForm.value, null, 2)); 
  }

}
