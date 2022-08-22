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
  public peticion: string = "";
  public nombrecompleto: string = "";
  public emailUser: string = "";
  public telefono: string = "";
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
        peticion: this.peticion,
        nombrecompleto: this.nombrecompleto,
        emailUser: this.emailUser,
        telefono: this.telefono
      });
      this.router.navigate(['/search']);
      console.log(this.user);
      this.closeContact();
    }
    
  }
}
