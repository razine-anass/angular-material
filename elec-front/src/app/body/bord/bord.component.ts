import { Component, OnInit } from '@angular/core';
import { image } from 'src/app/models/image.model';
import { HttpClient } from '@angular/common/http';
import { ChantierService } from 'src/app/services/chantier.service';

@Component({
  selector: 'app-bord',
  templateUrl: './bord.component.html',
  styleUrls: ['./bord.component.css']
})
export class BordComponent implements OnInit {

  //chantierImages: Array<image>;
  chantierImages: image;
  image: any;
  constructor(private chantierServ: ChantierService) { }

  ngOnInit() {
  }

  image1:image = {
    id:1,
    nom:'chantier1'
  }

  public getImage(){
    this.chantierServ.getImage().subscribe(
      (data: any)=>{
        this.image = data;

      },(error)=>{
          console.log('error'+error);
        }
    )
  
  }
   
}
