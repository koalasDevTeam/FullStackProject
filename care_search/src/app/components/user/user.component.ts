import { ReadVarExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  public showMenu:boolean = false;
  public storage: any;
  public pageSelected : string = 'intro'
  public userIntroIllustration: string = "./assets/img/illustrations/user_intro_illustration.svg"
  public noUserIllustration: string = "./assets/img/illustrations/no_user_illustration.svg"
  public photoUser: string = "";
  public previewPhoto: string='./assets/img/users/user-default.png';

  constructor(
    private UsersService:UsersService,
    private sanitizer:DomSanitizer
    ) { }


  //aqui se guarda el archivo de la imagen:
  public photoFile: any = [];
 

  ngOnInit(): void {
    this.storage = this.UsersService.storage;

  }

  showProfile(){
    this.pageSelected = 'profile'
  }
  showHistory(){
    this.pageSelected = 'history'
  }
  showNotifications(){
    this.pageSelected = 'notifications'
  }

//to show preview photo:
  takeNewPicture(event:any): any{
    const file = event.target.files[0]
    this.toBase64(file).then((img: any) =>{
      this.previewPhoto = img.base;
      //console.log(img)
    })
    this.photoFile.push(file)

  }

  toBase64 = async ($event: any) => new Promise((resolve, reject) => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      //const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          base: null
        });
      };

      return;

    } catch (e) {
      return null;
    }
  })


  setHideMenu(){
    this.showMenu = false;
  }

  setShowMenu(){
    this.showMenu = true;
  }

 
 
}
