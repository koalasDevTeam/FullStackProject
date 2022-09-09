import { Component, OnInit} from '@angular/core';
import { UsersService } from 'src/app/services/users/users.service';

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
  ifLogged:any

  constructor(private userService: UsersService) { }

  showHelperData(){
    let resultsHelper = this.userService.getHelpersById()
    this.helperObje =  resultsHelper
    return this.helperObje =  resultsHelper
  }
    ngOnInit(){
      this.showHelperData()
       this.ifLogged = this.userService.storage
   
    
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
