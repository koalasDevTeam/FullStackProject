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
  loginForm: any = [];
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
    this.loginForm = this.formBuilder.group({
      emailUser: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      passwordUser: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  getAllUsers(){
    this.userService.getAllUsers().then(response =>{this.users = response});
    
    }

    get message() {
      return this.loginForm.controls;
    }



     validateUserNameAndPassword(correctUser:any ){
        //console.log(correctUser)
    
        if(correctUser){
          
          localStorage.setItem('currentUser', JSON.stringify(correctUser))
          this.userService.setCurrentUser(correctUser)

          if(!this.userService.storage.currentUser.user_Status){
            this.router.navigate(['/user'])
          }else{
            this.router.navigate(['/'])
          }
          
        }
    
      } 
    
  

  login() {
   /*  let correctUSer = this.users.find((correct:any) =>correct.email === this.emailUser && correct.pass === this.passwordUser)
    console.log('check: ', correctUSer) */
    //this.correctUser = this.userService.validateUserNameAndPassword( this.emailUser, this.passwordUser )
    this.emptyForm = '';
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    } else if ((this.emailUser != '') && (this.passwordUser != '')) {
      this.userService.validateUserNameAndPassword( this.emailUser, this.passwordUser ).then(response =>{
        //console.log(response)
        if(response){
          this.validateUserNameAndPassword(response)
        } else {
          this.emptyForm = "Error en las credenciales. Usuario no registrado.";
        }
        
      });
    }
  }
}
