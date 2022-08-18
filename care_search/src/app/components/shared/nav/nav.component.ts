import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public mvView: boolean=false;

  getMv(value:boolean){
    this.mvView=value;
  }

  constructor() { }

  ngOnInit(): void {
   

    

  }


}
