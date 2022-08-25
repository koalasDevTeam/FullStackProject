import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  public emailUser: string = '';
  public passwordUser: string = '';
  public privacyUser: string = '';
  public emptyForm: string = '';
  public emptyPrivacy: string = '';
  public newUser: any = {};

  constructor(private router: Router, private userService: UsersService) {}

  ngOnInit(): void {}

  save() {
    if (this.emailUser == '' || this.passwordUser == '') {
      this.emptyForm = 'Error en el registro, debe rellenar los campos vacíos.';
      this.emptyPrivacy = '';
    } else if (this.privacyUser == '') {
      this.emptyForm = '';
      this.emptyPrivacy = 'Debe aceptar la Política de Privacidad.';
    } else {
      this.newUser = {
        email: `${this.emailUser}`,
        pass: `${this.passwordUser}`,
        name: 'Susana Cabrera',
        work: 'Cuidado infantil',
        img: './assets/img/users/1.jpg',
        info: 'Cuidadora de niños experimentada y fiable con más de diez años de experiencia en el cuidado de niños y sus familias. Ofrezco cuidados óptimos a niños de incluso tan solo 8 semanas de edad. Capaz de asumir tareas domésticas y dialogar con las familias para satisfacer mejor sus necesidades individuales.',
        full_info:
          'Cuidadora de niños experimentada y fiable con más de diez años de experiencia en el cuidado de niños y sus familias. Ofrezco cuidados óptimos a niños de incluso tan solo 8 semanas de edad. Capaz de asumir tareas domésticas y dialogar con las familias para satisfacer mejor sus necesidades individuales.Trabajé de niñera a tiempo completo para una familia con cuatro niños de entre 1 y 8 años. Llevaba y recogía a los niños del colegio, Lleva a los niños a las actividades extraescolares, Me encargaba de las tareas básicas del hogar.',
        location: 'Arucas',
        score: 4.3,
        price: '14€/Hora',
      };

      this.userService.createNewUser(this.newUser).then((user) => {
        localStorage.setItem('currentUser', JSON.stringify(user))
        this.userService.setCurrentUser(user)
        this.router.navigate(['/user']);
      });
    }
  }
}
