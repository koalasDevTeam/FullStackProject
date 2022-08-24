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
  
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  save() {
    
      this.user.push({
        name: this.emailUser,
        password: this.passwordUser,
        
      });
      this.router.navigate(['/user']);


      //console.log(this.user);
    }
    
  

}
