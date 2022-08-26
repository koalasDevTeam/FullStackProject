import { Component, OnInit, Output } from '@angular/core';
import { HelpersService } from 'src/app/services/helpers.service';
import { UsersService } from '../../services/users/users.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
 selectedOption: string = "";
 printedOption: string = "";
 noMatches: string = "No hay coincidencias, ¡prueba otra vez!";
 noFoundIllustration: string = "./assets/img/illustrations/no_found_illustration.svg"
 noFoundIllustrationMb: string = "./assets/img/illustrations/no_found_illustration_mb.svg"
 showModal: boolean = false;
 helperSelected : any;
 users : any = [];
 resultsList : any = [];



  constructor(private helperService: HelpersService, private UsersService:UsersService) { }

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
  // helpersArr = [
  //   {
  //     id: 1,
  //     name: "Susana Cabrera",
  //     work: "Cuidado infantil",
  //     img: "./assets/img/users/1.jpg",
  //     info: "Cuidadora de niños experimentada y fiable con más de diez años de experiencia en el cuidado de niños y sus familias. Ofrezco cuidados óptimos a niños de incluso tan solo 8 semanas de edad. Capaz de asumir tareas domésticas y dialogar con las familias para satisfacer mejor sus necesidades individuales.",
  //     full_info: "Cuidadora de niños experimentada y fiable con más de diez años de experiencia en el cuidado de niños y sus familias. Ofrezco cuidados óptimos a niños de incluso tan solo 8 semanas de edad. Capaz de asumir tareas domésticas y dialogar con las familias para satisfacer mejor sus necesidades individuales.Trabajé de niñera a tiempo completo para una familia con cuatro niños de entre 1 y 8 años. Llevaba y recogía a los niños del colegio, Lleva a los niños a las actividades extraescolares, Me encargaba de las tareas básicas del hogar.",
  //     location: "Arucas",
  //     score: 4.3,
  //      price:"14€/Hora",
  //   },
  //   {
  //     id: 2,
  //     name: "Mariana Perez",
  //     work: "Cuidador interna a domicilio",
  //     img: "./assets/img/users/2.jpg",
  //     info: "Cuidadora experimentada con mas de 8 años de experiencia en este sector. Ofrezco los mejores cuidados y atenciones como interna",
  //      full_info: "Cuidadora experimentada con mas de 8 años de experiencia en este sector. Ofrezco los mejores cuidados y atenciones como interna. Preparaba la cena, los llevaba de paseo y ayudaba a prepararse para la hora de dormir. Apoyé a los ancianos en labores básicas de aseo y movilidad.",
  //     location:"Las Palmas",
  //     score: 4.8,
  //     price:"1200€/Mes",
  //   },
  //   {
  //     id: 3,
  //     name: "Gorety Lopez",
  //     work: "Atencion personal",
  //     img: "./assets/img/users/3.jpg",
  //     info: "Cuidadora de ancianos con 6 años de experiencia. En mis empleos he demostrado eficiencia al momento de dar cuidados médicos y postoperatorios a personas de tercera edad. Tengo la capacidad de administrar medicamentos tanto vía oral como intravenosa. Las personas que he atendido me describen como una cuidadora profesional, amable y empática.",
  //     full_info: "Cuidadora de ancianos con 6 años de experiencia. En mis empleos he demostrado eficiencia al momento de dar cuidados médicos y postoperatorios a personas de tercera edad. Tengo la capacidad de administrar medicamentos tanto vía oral como intravenosa. Las personas que he atendido me describen como una cuidadora profesional, amable y empática. Realicé atención y monitoreo continuo a 6 pacientes distintos del área psiquiátrica. Colaboré con enfermeras y médicos para brindar administrar los medicamentos correctos a cada paciente.",
  //     location: "Galdar",
  //     score: 4.7,
  //      price:"18€/Hora",
  //   },
  //   {
  //     id: 4,
  //     name: "Carlos Hernandez",
  //     work: "Cuidado a domicilio por hora",
  //     img: "./assets/img/users/4.jpg",
  //     info: "Tengo experiencia en la atención de personas con discapacidades físicas y mentales. Tanto a ellas como a los ancianos los he apoyado en las tareas de movilidad y aseo. Tengo conocimiento en la prevención de accidentes domésticos y en la atención de los mismos, pues he realizado cursos de primeros auxilios.",
  //     full_info: "Tengo experiencia en la atención de personas con discapacidades físicas y mentales. Tanto a ellas como a los ancianos los he apoyado en las tareas de movilidad y aseo. Tengo conocimiento en la prevención de accidentes domésticos y en la atención de los mismos, pues he realizado cursos de primeros auxilios. Planifiqué actividades de ocio para las personas mayores. Apoyé en tareas cotidianas, como comer y el aseo personal. Atendí una media diaria de 12 personas de tercera edad.",
  //     location: "Mogan",
  //     score: 4.6,
  //     price:"20€/Hora",
  //   }
  // ]

 
 
  sendHelper(helperId:number){
    this.helperService.selectHelper(helperId)
  }

  ngOnInit(): void {
    console.log('vierneeees')
    this.getAllUsers();
   
  }

  getAllUsers(){
    this.UsersService.getAllUsers().then(response => this.users = response);
    console.log('usuarios: ',this.users)
  }

 
  result(){
  

  let filterList= this.users.filter((helper:any)=> {
    return helper.work === this.printedOption && helper.location === this.selectedOption
  })

    this.resultsList = filterList 
    console.log('result list: ',this.resultsList)
 
  }

  cleanList(){
   // this.resultsList = this.helpersArr
    this.selectedOption = "";
    this.printedOption = "";

 
  }


 /*  sendingId(id:number){
    id.toString()
    window.location.href = window.location.origin + '/profile/#' + id;
  } */

  //to show contact modal

  setContactModal(helper:any){
    this.showModal = true;
    this.helperSelected = helper;
  }
  hideContactModal(){
    this.showModal = false;
  }

  closeContact(){
    this.showModal = false;
  }

}