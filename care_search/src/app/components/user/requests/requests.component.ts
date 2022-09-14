import { Component, OnInit, Input } from '@angular/core';
import { MessagesService } from '../../../services/messages/messages.service';
import { UsersService } from '../../../services/users/users.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css'],
})
export class RequestsComponent implements OnInit {
  public showModal: boolean = false;
  public userMessages: any = [];
  public receivedMessages: any=[];
  public sendedMessages: any=[];
  public messageSelected : any;
  public noMessagesIllustration: string = "../assets/img/illustrations/no-messages.svg"
  constructor(private MessagesService: MessagesService, private UsersService:UsersService) {}

  ngOnInit(): void {
    this.getMessages();
  }

  setPostModal(message:any) {
    this.messageSelected=message;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  getMessages(){
    this.MessagesService.getAllMessages(this.UsersService.storage.currentUser._id).then((response) => {
      this.userMessages = response.reverse();
      console.log(this.userMessages)

      // this.userMessages.filter(message =>{

      // })

      this.receivedMessages= this.userMessages.filter((message:any)=> {
        return message.user_receive === this.UsersService.storage.currentUser._id
        })
      
      this.sendedMessages= this.userMessages.filter((message:any)=> {
        return message.user_receive !== this.UsersService.storage.currentUser._id
        })
      
      
    });
  }

 
}
