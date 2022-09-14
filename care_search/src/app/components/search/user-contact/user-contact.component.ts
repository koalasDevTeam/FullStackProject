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
  public newConversation: any = {};
  public messageSent: boolean = false;
  public messages:{}[] =[];
  public previousMessages:any;
  public conversationExists : boolean = false;

  closeContact() {
    this.event.emit('holaa2222');
  }

  constructor(
  private router: Router, 
  private UsersService: UsersService,
  private MessagesService:MessagesService,
  ) {}

  ngOnInit(): void {}

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

        console.log('mensaje: ', this.newMessage)

        this.messages.push(this.newMessage)
       
        console.log('mensajesss: ', this.messages)
       
       
        this.MessagesService.getAllConversations(this.helper._id,this.UsersService.storage.currentUser._id ).then((response) => {
         console.log('a veeee: ',response)
         if(response.length>0){
          this.conversationExists = true
         }


          
        })
        // this.MessagesService.createNewMessage(this.newMessage).then((message)=>{
        //  // console.log(message)
        //   //console.log(this.newMessage)
          
        // })

       

        
         this.newConversation ={
           user_1:`${this.helper._id}`,
           user_2:`${this.UsersService.storage.currentUser._id}`,
           messages:`${this.messages}`
         }
    
         this.MessagesService.createNewConversation(this.newConversation).then((conversation)=>{
           this.messageSent = true;
         })

       
     
       
      }
    }
  }
}
