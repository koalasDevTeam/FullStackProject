import { ReadVarExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { UsersService } from '../../services/users/users.service';
import axios from 'axios';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  

  public url: any = 'http://localhost:3000';
  public showModal: boolean = false;
  public showMenu: boolean = false;
  public storage: any;
  public pageSelected: string = 'intro'
  public userIntroIllustration: string = "./assets/img/illustrations/user_intro_illustration.svg"
  public noUserIllustration: string = "./assets/img/illustrations/no_user_illustration.svg"
  public photoUser: string = "";
  public previewPhoto: string='./assets/img/users/user-default.png';
  //uploadedFiles: Array<File>;
  constructor(
    private UsersService:UsersService,
    private sanitizer:DomSanitizer,
    //private rest: RestService,
    //private uploadService: UsersService
    ) { }


  //aqui se guarda el archivo de la imagen:
  public photoFiles: any = [];
 

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
  /*onUpload(){
    let formData = new FormData();
    for (let i = 0; i < this.uploadedFiles.length; i++){
      formData.append("uploads[]", this.uploadedFiles[i], this.uploadedFiles[i].name);
    }
    this.uploadService.uploadFile(formData).subscribe((res) => {console.log('Response:', res);
  })
  }
  onFileChange(e:any){
    this.uploadedFiles = e.target.files;
    this.onUpload();
  }*/
  uploadImage(): any {
    try{
      const dataForm = new FormData();
      this.photoFiles.forEach((photoFile:any) => {
        console.log(photoFile);
        dataForm.append('profileImage', photoFile)
      });
      return axios
      .post('http://localhost:3000/api/uploads', dataForm)
      
      
    }catch (e){
      console.log('ERROR', e);
    }
  }
  
  

//to show preview photo:
  takeNewPicture(event:any): any{
    const file = event.target.files[0]
    this.toBase64(file).then((img: any) =>{
      this.previewPhoto = img.base;
      //console.log(img)
    })
    this.photoFiles.push(file)
    this.uploadImage()
    //console.log(this.photoFile)
    //this.onFileChange(event);

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

  closeModal(){
    this.showModal = false;
  }
 
}
