import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfile',
  templateUrl: './perfile.component.html',
  styleUrls: ['./perfile.component.css']
})
export class PerfileComponent implements OnInit {

  optionsWorkArr = [
    {name:"Cuidador interna a domicilio", value:1},
    {name:"Atencion personal", value:2},
    {name:"Cuidado infantil", value:3},
    {name:"Cuidado a domicilio por hora", value:4}
  ]

  optionsLocationArr = [
    {city:"Las Palmas", value:1},
    {city:"Mogan", value:2},
    {city:"Galdar", value:3},
    {city:"Arucas", value:4},
    {city:"Tejeda", value:5}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
