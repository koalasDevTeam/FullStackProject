import { Component, OnInit} from '@angular/core';
import { HelpersService } from 'src/app/services/helpers.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 id: string="" ;
  helperObje: any =[];
  showModal: boolean = false;
  helperSelected : any;
  constructor(private userService: HelpersService) { }

  showHelperData(){
    let resultsHelper = this.userService.getHelpersById()
    this.helperObje =  resultsHelper
    return this.helperObje =  resultsHelper
  }
    ngOnInit(){
      this.showHelperData()
    
    } 


  //to show contact modal

  setContactModal(helper:any){
    this.showModal = true;
    this.helperSelected = helper;
    //console.log(this.helperSelected)

    
    
  }
  hideContactModal(){
    this.showModal = false;
  }

  closeContact(){
    this.showModal = false;
  }



}
