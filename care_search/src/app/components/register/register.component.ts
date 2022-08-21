import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user: any = [];
  public emailUser: string = "";
  public passwordUser: string = "";
  public privacyUser: string = "";
  public emptyForm: string = "";
  public emptyPrivacy: string = "";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  save() {
    if((this.emailUser == "") || (this.passwordUser == "")){
      this.emptyForm = "Error en el registro, debe rellenar los campos vacíos.";
      this.emptyPrivacy = "";
    } else if(this.privacyUser == "") {
      this.emptyForm = "";
      this.emptyPrivacy = "Debe aceptar la Política de Privacidad.";
    } else {
      this.user.push({
        name: this.emailUser,
        password: this.passwordUser,
        privacy: this.privacyUser
      });
      this.router.navigate(['/profile']);
    }
    console.log(this.user);
  }

}
