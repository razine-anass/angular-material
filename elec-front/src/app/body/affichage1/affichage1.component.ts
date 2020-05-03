import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-affichage1',
  templateUrl: './affichage1.component.html',
  styleUrls: ['./affichage1.component.css']
})
export class Affichage1Component implements OnInit {

  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;
  listImage = Array<any>();
  selectedFil = null;

  values: any;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }


  //Gets called when the user selects an image
  public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
  }
  //Gets called when the user clicks on submit to upload the image
  onUpload() {
    console.log(this.selectedFile);
    
    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
  
    //Make a call to the Spring Boot Application to save the image
    this.httpClient.post('http://localhost:8080/photos/upload', uploadImageData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          this.message = 'Image uploaded successfully';
        } else {
          this.message = 'Image not uploaded successfully';
        }
      }
      );
  }
    //Gets called when the user clicks on retieve image button to get the image from back end
    getImage() {
    //Make a call to Sprinf Boot to get the Image Bytes.
    this.httpClient.get('http://localhost:8080/photos/' + this.imageName)
      .subscribe(
        res => {
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        }
      );
  }

  getImages() {

    let parm1:any;
    let parm2:any;
    //Make a call to Sprinf Boot to get the Image Bytes.
    this.httpClient.get('http://localhost:8080/photos/photo')
      .subscribe(
        (res: Array<any>) => {
          for (let img of res) {
          parm1 = img;
          this.base64Data = img.picByte;
          parm2 = 'data:image/png;base64,' + this.base64Data;
          this.listImage.push(parm2);
          }
        }
      );
  }

  onFileSelected(event) {
    console.log(event.target.id);
    //tableau de binaire on peut l'evoyer directement si le webservice accept un tableau de binaire
    this.selectedFile = <File> event.target.files[0];
  }

  onUploade(){
    // on creer un objet de type multipart
    const fd = new FormData();
    fd.append('imageFile', this.selectedFile, this.selectedFile.name);
    this.httpClient.post('http://localhost:8080/photos/upload',fd
    ,{
     reportProgress: true,
     observe: 'events'})
       .subscribe(event=>{

         if(event.type === HttpEventType.UploadProgress){
           console.log('upload progress'+Math.round(event.loaded / event.total*100)+'%');
         }
          else if(event.type === HttpEventType.Response){
          console.log(event);
         }
         
       },error=>{

       })
  }

  onKey(event: any) { // without type info
    this.values = event.target.value;
  }

  
	update(value: string) { this.values = value; }

}
