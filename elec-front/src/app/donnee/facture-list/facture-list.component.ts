import { Component, OnInit } from '@angular/core';
import { FactureService } from 'src/app/services/facture.service';
import { facture } from 'src/app/models/facture.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-facture-list',
  templateUrl: './facture-list.component.html',
  styleUrls: ['./facture-list.component.css']
})
export class FactureListComponent implements OnInit {

  factures:Array<facture>;
  facturesPageable:Array<facture>;
  facture:facture;

  constructor(private factureService: FactureService,private router:Router) { }

  ngOnInit() {
    this.getFacturePageable(0,2);
  }

  
  getFacturesAll(){
    this.factureService.getFacturesAll().subscribe(
      (data: facture[])=>{
        console.log(data);
        this.factures= data;
      },error=>{
        console.log();
      }
    );
}

getFactureById(id:number){
  this.router.navigate(['details-facture', id]);

}

getFacturePageable(page:number,size:number){

  this.factureService.getFacturePageable(page,size).subscribe(
    (data: any[])=>{
      console.log(data);
      this.factures = data;
    }, error =>{
      console.log();
    }
  )
}

creerFacture(facture:facture){
  this.factureService.creerFacture(facture).subscribe(
    data=>{
      console.log(data);
    },error=>{
      console.log();
    }
  )
}

updateFacture(facture:facture){
  this.factureService.updateFacture(facture).subscribe(
    data=>{
      console.log(data);
    },error=>{
      console.log();
    }
  )
}

deleteFactureById(id:number){
  this.factureService.deleteFactureById(id).subscribe(
    data=>{
      console.log(data);
      this.getFacturesAll();
    },error=>{
      console.log();
    }
  )
}

}
