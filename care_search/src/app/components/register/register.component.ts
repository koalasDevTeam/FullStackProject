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

  constructor(private router: Router, private userService: UsersService) {}

  ngOnInit(): void {}

  save() {
    this.emptyForm = '';
    this.emptyPrivacy = '';
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
        worker:true,
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
