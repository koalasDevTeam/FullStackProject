import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-feedback',
  templateUrl: './modal-feedback.component.html',
  styleUrls: ['./modal-feedback.component.css']
})
export class ModalFeedbackComponent implements OnInit {

  @Output() event = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  closeModal(){
    this.event.emit();
  }

}
