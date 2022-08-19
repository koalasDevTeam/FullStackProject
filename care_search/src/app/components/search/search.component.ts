import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})



export class SearchComponent implements OnInit {
 selectedOption: string = "";
  printedOption: string = "";
  noMatches: string = "No hay coincidencias, prueba otra vez!";

  

  
  constructor() { }

  optionsWorkArr = [
    
    {name:"Mostrar todos", value:1},
    {name:"Cuidador interna a domicilio", value:2},
    {name:"Atencion personal", value:3},
    {name:"Cuidado infantil", value:4},
    {name:"Cuidado a domicilio por hora", value:5}
  ]

  optionsLocationArr = [
{city:"Cualquier lugar", value:1},
  {city:"Las Palmas", value:2},
  {city:"Mogan", value:3},
  {city:"Galdar", value:4},
  {city:"Arucas", value:5},
  {city:"Tejeda", value:6}

]
  helpersArr = [
    {
      id: 1,
      name: "Susana Cabrera",
      work: "Cuidado infantil",
      img: "./assets/img/users/1.jpg",
      info: "Cuidadora de niños experimentada y fiable con más de diez años de experiencia en el cuidado de niños y sus familias. Ofrezco cuidados óptimos a niños de incluso tan solo 8 semanas de edad. Capaz de asumir tareas domésticas y dialogar con las familias para satisfacer mejor sus necesidades individuales.",
      location: "Arucas",
      score: 4.3
    },
    {
      id: 2,
      name: "Mariana Perez",
      work: "Cuidadora interna a domicilio",
      img: "./assets/img/users/2.jpg",
      info: "Cuidadora experimentada con mas de 8 años de experiencia en este sector. Ofrezco los mejores cuidados y atenciones como interna",
      location:"Las Palmas",
      score: 4.8
    },
    {
      id: 3,
      name: "Gorety Lopez",
      work: "Atencion personal",
      img: "./assets/img/users/3.jpg",
      info: "Cuidadora de ancianos con 6 años de experiencia. En mis empleos he demostrado eficiencia al momento de dar cuidados médicos y postoperatorios a personas de tercera edad. Tengo la capacidad de administrar medicamentos tanto vía oral como intravenosa. Las personas que he atendido me describen como una cuidadora profesional, amable y empática.",
      location: "Galdar",
      score: 4.7
    },
    {
      id: 4,
      name: "Carlos Hernandez",
      work: "Cuidado a domicilio por hora",
      img: "./assets/img/users/4.jpg",
      info: "Tengo experiencia en la atención de personas con discapacidades físicas y mentales. Tanto a ellas como a los ancianos los he apoyado en las tareas de movilidad y aseo. Tengo conocimiento en la prevención de accidentes domésticos y en la atención de los mismos, pues he realizado cursos de primeros auxilios.",
      location: "Mogan",
      score: 4.6
    }
  ]

  resultsList=this.helpersArr

  ngOnInit(): void {
  }
 
  result(){
  console.log("My input two: ",this.printedOption,"city: ",this.selectedOption)

  let filterList= this.helpersArr.filter((item, i)=> {
    return item.work === this.printedOption && item.location === this.selectedOption}
    )

    this.resultsList = filterList 
 
  }

  cleanList(){
    this.resultsList = this.helpersArr
    this.selectedOption = "";
    this.printedOption = "";

 
  }

}