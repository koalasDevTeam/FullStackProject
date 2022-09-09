
import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-no-user-message',
  templateUrl: './no-user-message.component.html',
  styleUrls: ['./no-user-message.component.css']
})
export class NoUserMessageComponent implements OnInit {
  @Output() event = new EventEmitter();
  showModal: boolean = false;
  constructor() {


   }
  closeContact(){
    this.event.emit()
  }

  ngOnInit(): void {
   this.showModal = true;
  }
   hideContactModal(){
    this.showModal = false;
  }


}
