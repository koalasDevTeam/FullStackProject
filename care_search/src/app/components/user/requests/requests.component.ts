import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  public showModal: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  setPostModal() {
    this.showModal = true;
  }

  closeModal(){
    this.showModal = false;
  }

}
