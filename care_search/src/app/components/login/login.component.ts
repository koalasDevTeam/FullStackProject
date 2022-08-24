import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users/users.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: any = [];
  public emailUser: string = "";
  public passwordUser: string = "";

  public newUser:any;
  
  
  constructor(
    private router: Router,
    private UsersService : UsersService
    
    ) { }

  ngOnInit(): void {
  }

  save() {
    
      this.user.push({
        name: this.emailUser,
        password: this.passwordUser,
        
      });
      this.router.navigate(['/user']);


      this.newUser =  {
        "id": 1,
        "email":`${this.emailUser}`,
        "pass":`${this.passwordUser}`,
         "name": "Susana Cabrera",
         "work": "Cuidado infantil",
         "img": "./assets/img/users/1.jpg",
         "info": "Cuidadora de niños experimentada y fiable con más de diez años de experiencia en el cuidado de niños y sus familias. Ofrezco cuidados óptimos a niños de incluso tan solo 8 semanas de edad. Capaz de asumir tareas domésticas y dialogar con las familias para satisfacer mejor sus necesidades individuales.",
         "full_info": "Cuidadora de niños experimentada y fiable con más de diez años de experiencia en el cuidado de niños y sus familias. Ofrezco cuidados óptimos a niños de incluso tan solo 8 semanas de edad. Capaz de asumir tareas domésticas y dialogar con las familias para satisfacer mejor sus necesidades individuales.Trabajé de niñera a tiempo completo para una familia con cuatro niños de entre 1 y 8 años. Llevaba y recogía a los niños del colegio, Lleva a los niños a las actividades extraescolares, Me encargaba de las tareas básicas del hogar.",
         "location": "Arucas",
         "score": 4.3,
          "price":"14€/Hora"
       }

       //this.UsersService.createNewUser(this.newUser).then(user => {this.newUser.push(user); this.newUser{name : "abi"}})
      //  this.UsersService.createNewUser(this.newUser).then(newUser =>{
      //   this
      //  })


      //console.log(this.user);
    }
    
  

}
