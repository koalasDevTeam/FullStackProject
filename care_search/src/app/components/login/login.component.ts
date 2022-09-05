import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users/users.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  registerForm: any = [];
  submitted = false;
  public emailUser: string = "";
  public passwordUser: string = "";
  public emptyForm: string = "";
  public newUser: any = {};
  public users : any =[];

  constructor(private router: Router,
   private userService:UsersService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getAllUsers()
    this.registerForm = this.formBuilder.group({
      emailUser: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      passwordUser: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  getAllUsers(){
    this.userService.getAllUsers().then(response => this.users = response);
    
    }

    get message() {
      return this.registerForm.controls;
    }
 

  login() {
    let correctUSer = this.users.find((correct:any) =>correct.email === this.emailUser && correct.pass === this.passwordUser)
    //console.log('check: ', correctUSer)
  
      if(correctUSer){
        localStorage.setItem('currentUser', JSON.stringify(correctUSer))
        this.userService.setCurrentUser(correctUSer)

        if(!this.userService.storage.currentUser.user_Status){
          this.router.navigate(['/user'])
        }else{
          this.router.navigate(['/'])
        }

        
      }
      else{
        this.emptyForm = "Error en las credenciales. Usuario no registrado.";
      }
  
      this.submitted = true;
        if (this.registerForm.invalid) {
          return;
        }
        console.log(JSON.stringify(this.registerForm.value, null, 2));
  
    }
    
   

}
