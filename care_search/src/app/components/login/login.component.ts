import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: any = [];
  public emailUser: string = "";
  public passwordUser: string = "";
  public emptyForm: string = "";
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  save() {
    if((this.emailUser == "") || (this.passwordUser == "")){
      this.emptyForm = "Error en las credenciales. Usuario no registrado.";
    } else {
      this.user.push({
        name: this.emailUser,
        password: this.passwordUser,
        
      });
      //this.router.navigate(['/profile']);


      //console.log(this.user);
    }

  }
    
  

}
