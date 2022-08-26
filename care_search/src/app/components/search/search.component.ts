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
 public users : any = [];
 resultsList : any = [];



  constructor(private helperService: HelpersService) { }

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
 
 
  sendHelper(helperId:number){
    this.helperService.selectHelper(helperId)
  }

  ngOnInit(): void {
    this.getAllUsers();
    this.resultsList = this.users;
   
  }

  getAllUsers(){
    this.helperService.getAllUsers().then(response => this.users = response);
    
  }

 
  result(){

  let filterList= this.users.filter((helper:any)=> {
    return helper.work === this.printedOption && helper.location === this.selectedOption
  })

    this.resultsList = filterList 
    console.log('result list: ',this.resultsList)
 
  }

  cleanList(){
    this.resultsList = this.users
    this.selectedOption = "";
    this.printedOption = "";
  }



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