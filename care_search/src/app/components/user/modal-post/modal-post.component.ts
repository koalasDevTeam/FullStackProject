import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-post',
  templateUrl: './modal-post.component.html',
  styleUrls: ['./modal-post.component.css']
})
export class ModalPostComponent implements OnInit {

  public titlePost: string = "";
  public selectedOption: string = "";

  constructor() { }

  optionsLocationArr = [
    {city:"Las Palmas", value:1},
    {city:"Mogan", value:2},
    {city:"Galdar", value:3},
    {city:"Arucas", value:4},
    {city:"Tejeda", value:5}
  ]

  ngOnInit(): void {
  }

}
