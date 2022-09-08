import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-message',
  templateUrl: './modal-message.component.html',
  styleUrls: ['./modal-message.component.css']
})
export class ModalMessageComponent implements OnInit {

  @Output() event = new EventEmitter();
  public visability: boolean = false;
  public novisability: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  replyMessage(){
    this.visability = true;
    this.novisability = false;
  }

  closeModal(){
    this.event.emit();
  }

}
