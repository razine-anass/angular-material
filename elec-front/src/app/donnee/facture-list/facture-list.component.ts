import { Component, OnInit } from '@angular/core';
import { FactureService } from 'src/app/services/facture.service';

@Component({
  selector: 'app-facture-list',
  templateUrl: './facture-list.component.html',
  styleUrls: ['./facture-list.component.css']
})
export class FactureListComponent implements OnInit {

  constructor(private factureService: FactureService) { }

  ngOnInit() {
  }

  
  getFacturesAll(){
    this.factureService.getFacturesAll().subscribe(
      data=>{

      },error=>{

      }
    );
}

getFactureById(id:number){
   this.factureService.getFactureById(id).subscribe(
     data=>{

     },error=>{

     }
   );
}

getFacturePageable(page:number,size:number){

  this.factureService.getFacturePageable(page,size).subscribe(
    data=>{

    }, error =>{

    }
  )
}

creerFacture(facture){
  this.factureService.creerFacture(facture).subscribe(
    data=>{

    },error=>{

    }
  )
}

updateFacture(facture){
  this.factureService.updateFacture(facture).subscribe(
    data=>{

    },error=>{

    }
  )
}

deleteFactureById(id:number){
  this.factureService.deleteFactureById(id).subscribe(
    data=>{

    },error=>{

    }
  )
}

}
