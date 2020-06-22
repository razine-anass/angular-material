import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FactureService } from 'src/app/services/facture.service';
import { facture } from 'src/app/models/facture.model';
import { Router } from '@angular/router';
import { PanierService } from 'src/app/services/panier.service';


@Component({
  selector: 'app-facture-list',
  templateUrl: './facture-list.component.html',
  styleUrls: ['./facture-list.component.css']
})
export class FactureListComponent implements OnInit {

  factures:Array<facture>;
  facturesPageable:Array<facture>;
  facture:facture;
  isExist:boolean = true;
  
   tableau:Array<any>=[];
   @ViewChild('lastNameInput') lastNameInput:ElementRef;
   @ViewChild('ref') ref:ElementRef;

  constructor(private factureService: FactureService,private router:Router,
              private panierService: PanierService) { }

  ngOnInit() {
    this.getFacturesAll();
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

  fusionner(d,lastName: HTMLInputElement,l: HTMLInputElement){
     const number = Number(lastName.id);
    
    const f:facture =this.factures.find(facture=>facture.id ==number);
    //this.isExist = this.panierService.isExist(f);

    if(lastName.innerText==='Enlever'){

      lastName.innerText='Ajouter';
      
      if(this.tableau.includes(lastName.id)){
        this.tableau.splice(this.tableau.indexOf(lastName.id),1);
        this.panierService.removeFacture(f);
        console.log('Enlever  '+this.tableau);
        console.log('Enlever  panier'+this.panierService.panier.factures);
        l.style.backgroundColor="";
     }
     
     } else if(lastName.innerText==='Ajouter'){
      l.style.backgroundColor="silver";
      lastName.innerText='Enlever';
      this.tableau.push(lastName.id);
      this.panierService.addFactureToPanier(f);
      console.log('Ajouter  '+this.tableau);
      console.log('Ajouter au panier  '+this.panierService.panier.factures);
     }
  }

  
  test1(d,lastName: HTMLInputElement,l: HTMLInputElement){
   
     if(lastName.innerText==='Enlever'){

      lastName.innerText='Ajouter';
      
      if(this.tableau.includes(lastName.id)){
        this.tableau.splice(this.tableau.indexOf(lastName.id),1);
        console.log('Enlever'+this.tableau);
        l.style.backgroundColor="";
     }
     
     } else if(lastName.innerText==='Ajouter'){
      l.style.backgroundColor="silver";
      lastName.innerText='Enlever';
      this.tableau.push(lastName.id);
      console.log('Ajouter'+this.tableau);
     }
  }
}
