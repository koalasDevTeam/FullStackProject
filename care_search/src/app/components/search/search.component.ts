import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users/users.service';


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
 pressedSearchButton: boolean = false
 

  constructor(private  UsersService:UsersService) { 
   }

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


   ngOnInit(): void { 
    this.getAllUsers();

        
  }
  

// to find helper by Id
  sendHelper(helperId:number){
    console.log(helperId)
    this.UsersService.selectHelper(helperId)
  }



// to get all helpers - function from services
  getAllUsers(){
    type Person = {
      city:string,
      datebirth:string,
      direction:string,
      dni:string,
      email:string,
      full_info:string,
      id:string,
      img:string,
      job:string,
      name:string,
      pass:string,
      price:string,
      schedule:string,
      score:number,
      worker:boolean
    }
    return this.UsersService.getAllUsers().then(response => {
      //console.log(response)
      const filerUsersWithFullInfo = response.filter((user:Person) => user.full_info)
      this.users = filerUsersWithFullInfo;this.resultsList = this.users
    }
    ); 
    
  }

   
  searchResult(){
  this.pressedSearchButton = true
  let filterList= this.users.filter((helper:any)=> {
  return helper.job === this.printedOption && helper.city === this.selectedOption
  })

  this.resultsList = filterList 
  
 
  }


//to clean the all list
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