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
    this.getAllUsers()
  }

  getAllUsers(){
    this.userService.getAllUsers().then(response => this.users = response);
    }

 

  login() {
    if((this.emailUser == "") || (this.passwordUser == "")){
      this.emptyForm = "Error en las credenciales. Usuario no registrado.";
    } else {
    
     let correctUSer = this.users.find((correct:any) =>correct.email === this.emailUser && correct.pass === this.passwordUser)
    //console.log('check: ', correctUSer)
    if(correctUSer){
      localStorage.setItem('currentUser', JSON.stringify(correctUSer))
      this.userService.setCurrentUser(correctUSer)
      this.router.navigate(['/user'])
    }
    else{
      this.emptyForm = "Error en las credenciales. Usuario no registrado.";
    }
 
    }

  }
    
  

}
