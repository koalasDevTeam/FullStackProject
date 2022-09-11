import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../../services/users/users.service';
import { MessagesService } from '../../../services/messages/messages.service';
@Component({
  selector: 'app-user-contact',
  templateUrl: './user-contact.component.html',
  styleUrls: ['./user-contact.component.css'],
})
export class UserContactComponent implements OnInit {
  @Output() event = new EventEmitter();
  @Input() helper?: any;

  public user: any = [];
  public petition: string = '';
  public fullName: string = '';
  public emailUser: string = '';
  public phoneNumber: string = '';
  public privacyUser: string = '';
  public emptyForm: string = '';
  public emptyPrivacy: string = '';
  public newMessage: any = {};
  public messageSent: boolean = false;

  closeContact() {
    this.event.emit('holaa2222');
  }

  constructor(
  private router: Router, 
  private UsersService: UsersService,
  private MessagesService:MessagesService,
  ) {}

  ngOnInit(): void {}

  // save() {
  //   console.log('save')
  //   if(this.privacyUser == "") {
  //       this.emptyForm = "";
  //       this.emptyPrivacy = "Debe aceptar la Política de Privacidad.";
  //   } else {
  //     this.user.push({
  //       petition: this.petition,
  //       fullName: this.fullName,
  //       emailUser: this.emailUser,
  //       phoneNumber: this.phoneNumber
  //     });
  //     //this.router.navigate(['/search']);
  //    // this.closeContact();
  //   }

  // }

  sendMessage() {
    //console.log('save');
    if (this.privacyUser == '') {
      this.emptyPrivacy = 'Debe aceptar la Política de Privacidad.';
      this.emptyForm = '';
    } else {
      if (this.petition == '') {
        this.emptyForm = 'El mensaje debe tener contenido';
        this.emptyPrivacy = '';
      } else {

        const timeNow = Date.now();
        const today = new Date(timeNow);
        //console.log(today.toLocaleDateString())
      
        this.newMessage ={
          user_send : `${this.UsersService.storage.currentUser._id}`,
          name_user_send : `${this.UsersService.storage.currentUser.name}`,
          img_user_send : `${this.UsersService.storage.currentUser.img}`,
          user_receive : `${this.helper._id}`,
          date : `${today.toLocaleDateString()}`,
          content: `${this.petition}`
        }
       
        this.MessagesService.createNewMessage(this.newMessage).then((message)=>{
         // console.log(message)
          //console.log(this.newMessage)
          this.messageSent = true;
        })
     
       
      }
    }
  }
}
