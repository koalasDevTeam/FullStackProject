import { Component, OnInit, Output, ElementRef, EventEmitter } from '@angular/core';
import { HelpersService } from 'src/app/services/helpers.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 id: string=""
 helperObje:any
  constructor(private userService: HelpersService) { }

  showHelperData(){
    //let resultsHelper = this.userService.getHelpersById()
    
    //return this.helperObje =  resultsHelper
  }
    ngOnInit(){
      this.showHelperData()
  
   








     
       /*  const locationHashUrl = window.location.hash

        this.id = locationHashUrl.slice(1)

       const resultItem = this.helpersArr.filter((item,i)=>{ 
          let gettingId = item.id

          let idToString= gettingId.toString()

          return idToString === this.id
          
        } ) 

        this.helpersArr = resultItem
        
         */
 
    
    } 



}
