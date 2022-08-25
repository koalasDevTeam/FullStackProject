import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfile',
  templateUrl: './perfile.component.html',
  styleUrls: ['./perfile.component.css']
})
export class PerfileComponent implements OnInit {

  public user: any = [];
  public photoUser: string = "";
  public namelUser: string = "";
  public firstSurnameUser: string = "";
  public secondSurnameUser: string = "";
  public dniUser: string = "";
  public dateUser: string = "";
  public genreUser: string = "";
  public phoneUser: string = "";
  public emailUser: string = "";
  public addressUser: string = "";
  public cityUser: string = "";
  public priceUser: string = "";
  public categoryUser: string = "";
  public descriptionUser: string = "";
  public emptyForm: string = "";

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

  save() {
    
      this.user.push({
        photo: this.photoUser,
        name: this.namelUser,
        first_surname: this.firstSurnameUser,
        second_surname: this.secondSurnameUser,
        dni: this.dniUser,
        date: this.dateUser,
        genre: this.genreUser,
        phone: this.phoneUser,
        email: this.emailUser,
        address: this.addressUser,
        city: this.cityUser,
        price: this.priceUser,
        category: this.categoryUser,
        description: this.descriptionUser
      });
    
    console.log(this.user);
  }

}
