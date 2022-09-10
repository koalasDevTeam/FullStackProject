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
  public messages: any = [];
  public userMessages: any = [];
  public messageSelected : any;

  constructor(private MessagesService: MessagesService, private UsersService:UsersService) {}

  ngOnInit(): void {
    this.getMessages();
    // this.checkMessages();
  }

  setPostModal(message:any) {
    this.messageSelected=message;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  getMessages() {
    this.MessagesService.getAllMessages().then((response) => {
      this.messages = response;
      this.userMessages= this.messages.filter((message:any)=> {
        return message.user_receive === this.UsersService.storage.currentUser._id
        })

    });
  }

  // checkMessages() {
  //   this.messages.map((mes: any) => {
  //     console.log(mes);
  //   });
  // }
}
