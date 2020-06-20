import { Component, OnInit } from '@angular/core';
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
  j:number=0;
   tab:Array<number>=[];

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

  ajouterFusionner(id:number,i:number){
    const f =this.factures.find(facture=>
      facture.id === id
    );

    this.isExist = this.panierService.isExist(f);

    if(this.isExist === false){
      this.j=i;
      this.isExist = false;
      this.panierService.addFactureToPanier(f);
     
    } else {
      this.panierService.removeFacture(f);
      this.isExist = true;
    
    }
    
  }

  deFusionner(id:number,i:number){
    const f =this.factures.find(facture=>
      facture.id === id
    );

    this.isExist = this.panierService.isExist(f);

    if(this.isExist === true){
      this.j=i;
      this.isExist = false;
      this.panierService.addFactureToPanier(f);
     
    } else {
      this.panierService.removeFacture(f);
      this.isExist = true;
    
    }
    
  }



  test(i:number,j:number):boolean{

    if(j==0){
        this.tab.push(i);
        this.j=1;
        return false;
    }

    if(j==1){
      const index: number = this.tab.indexOf(i);
      if (index !== -1) {
        this.j=0;
          this.tab.splice(index, 1);
          return false;
      }
    }
      
  }

  tableau = [];
 
  ajouter:any;
  enlever:any;


  test1(day,lastName: HTMLInputElement){
    console.log(lastName);
    lastName.hidden = true;
    this.ajouter = lastName;
   //if(this.tableau.includes(lastName.id)){
    //  this.tableau.splice(this.tableau.indexOf(lastName.id),1);
   //   console.log(this.tableau);
   //}
 //  else
  // { 
    this.tableau.push(lastName.id);
    console.log(this.tableau);
  // }
  }

  test2(ref: HTMLInputElement){
    this.enlever = ref;
    console.log(ref);
    ref.hidden = true;
   if(this.tableau.includes(ref.id)){
    
      this.tableau.splice(this.tableau.indexOf(ref.id),1);
      console.log(this.tableau);
   }
  // else
  // { 
  //  this.tableau.push(ref.id);
  //  console.log(this.tableau);
 //  }
  }

  checkIfFinnished(item){
     return  this.tableau.includes(item);
   }


}
