import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  public showModalPost = false;
  public showModalFeedback = false;

  constructor() { }

  ngOnInit(): void {
  }

  setModalPost() {
    this.showModalPost = true;
  }

  setModalFeedback() {
    this.showModalFeedback = true;
  }

  closeModalPost(){
    this.showModalPost = false;
  }

  closeModalFeedback(){
    this.showModalFeedback = false;
  }

}
