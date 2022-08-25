import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users/users.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  public emailUser: string = "";
  public passwordUser: string = "";
  public emptyForm: string = "";
  public newUser: any = {};
  public users : any =[];

  constructor(private router: Router,
   private userService:UsersService) { }

  ngOnInit(): void {
    
  }

  save() {
    if((this.emailUser == "") || (this.passwordUser == "")){
      this.emptyForm = "Error en las credenciales. Usuario no registrado.";
    } else {
    
    
      this.router.navigate(['/user'])

     
    }

  }
    
  

}
