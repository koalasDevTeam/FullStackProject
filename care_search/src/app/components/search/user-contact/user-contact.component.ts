import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-contact',
  templateUrl: './user-contact.component.html',
  styleUrls: ['./user-contact.component.css']
})
export class UserContactComponent implements OnInit {
  @Output() event = new EventEmitter();
  @Input() helper? : any;
 
  public user: any = [];
  public petition: string = "";
  public fullName: string = "";
  public emailUser: string = "";
  public phoneNumber: string = "";
  public privacyUser: string = "";
  public emptyForm: string = "";
  public emptyPrivacy: string = "";


  closeContact(){
    this.event.emit('holaa2222')
  }


  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  save() {
    if(this.privacyUser == "") {
        this.emptyForm = "";
        this.emptyPrivacy = "Debe aceptar la Política de Privacidad.";
    } else {
      this.user.push({
        petition: this.petition,
        fullName: this.fullName,
        emailUser: this.emailUser,
        phoneNumber: this.phoneNumber
      });
      this.router.navigate(['/search']);
      this.closeContact();
    }
    
  }
}
