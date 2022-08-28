import { Component, OnInit} from '@angular/core';
import { HelpersService } from 'src/app/services/helpers.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 id: string=""
 helperObje: any =[]
  constructor(private userService: HelpersService) { }

  showHelperData(){
    let resultsHelper = this.userService.getHelpersById()
    this.helperObje =  resultsHelper
    return this.helperObje =  resultsHelper
  }
    ngOnInit(){
      this.showHelperData()
    
    } 



}
