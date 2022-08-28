import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { UsersService } from '../../services/users/users.service';
import { FormBuilder, Validators } from '@angular/forms';

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
  public emptyForm: string = '';
  public newUser: any = {};
  
  constructor(private router: Router, /*private userService: UsersService,*/ private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.forgetForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get message() {
    return this.forgetForm.controls;
  }

  save() {
    this.emptyForm = '';
    if ((this.emailUser == '') || (this.passwordUser == '')) {
      this.emptyForm = 'Error en el registro, debe rellenar los campos vacíos.';
    } else {
      this.newUser = {
        email: `${this.emailUser}`,
        pass: `${this.passwordUser}`,
        name: '',
        work: '',
        worker:true,
        img: './assets/img/users/1.jpg',
        full_info:'',
        score: 0,
        price: '',
        profile: ''
      };

      /*this.userService.createNewUser(this.newUser).then((user) => {
        localStorage.setItem('currentUser', JSON.stringify(user))
        this.userService.setCurrentUser(user)
        this.router.navigate(['/user']);
      });*/
    }

    this.submitted = true;

    if (this.forgetForm.invalid) {
      return;
    }

  }

}
