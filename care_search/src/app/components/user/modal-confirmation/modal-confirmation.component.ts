import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-confirmation',
  templateUrl: './modal-confirmation.component.html',
  styleUrls: ['./modal-confirmation.component.css']
})
export class ModalConfirmationComponent implements OnInit {
  @Output() event = new EventEmitter();

  showModal: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  closeContact(){
    this.event.emit('holaa2222');
  }

}
