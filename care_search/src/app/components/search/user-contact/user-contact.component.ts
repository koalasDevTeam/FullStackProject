import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-contact',
  templateUrl: './user-contact.component.html',
  styleUrls: ['./user-contact.component.css']
})
export class UserContactComponent implements OnInit {
  @Output() event = new EventEmitter();
  @Input() helper? : any;
 

  closeContact(){
    this.event.emit('holaa2222')
  }


  constructor() { }

  ngOnInit(): void {
  }

}
