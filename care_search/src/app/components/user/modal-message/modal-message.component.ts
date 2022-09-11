import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { MessagesService } from '../../../services/messages/messages.service';
import { UsersService } from '../../../services/users/users.service';

@Component({
  selector: 'app-modal-message',
  templateUrl: './modal-message.component.html',
  styleUrls: ['./modal-message.component.css'],
})
export class ModalMessageComponent implements OnInit {
  @Output() event = new EventEmitter();
  public visability: boolean = false;
  public novisability: boolean = true;
  public emptyForm: string = '';
  @Input() messageReceived?: any;
  public messageSent: boolean = false;
  public petition: string = '';
  public newMessage: any = {};

  constructor(
    private UsersService: UsersService,
    private MessagesService: MessagesService
  ) {}

  ngOnInit(): void {}

  replyMessage() {
    this.visability = true;
    this.novisability = false;
  }
  backMessage() {
    this.visability = false;
    this.novisability = true;
  }

  closeModal() {
    this.event.emit();
  }

  sendMessage() {
   // console.log('save');

    if (this.petition == '') {
      this.emptyForm = 'El mensaje debe tener contenido';
    } else {
      const timeNow = Date.now();
      const today = new Date(timeNow);
     // console.log(today.toLocaleDateString());

      this.newMessage = {
        user_send: `${this.UsersService.storage.currentUser._id}`,
        name_user_send: `${this.UsersService.storage.currentUser.name}`,
        img_user_send: `${this.UsersService.storage.currentUser.img}`,
        user_receive: `${this.messageReceived.user_send}`,
        date: `${today.toLocaleDateString()}`,
        content: `${this.petition}`,
      };

      this.MessagesService.createNewMessage(this.newMessage).then((message) => {
        //console.log(message);
        //console.log(this.newMessage);
        this.visability = false;
        this.messageSent = true;
      });
    }
  }
}
