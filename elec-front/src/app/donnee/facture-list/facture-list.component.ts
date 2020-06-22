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
  
   tab:Array<number>=[];
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

  ajouterFusionner(id:number,i:number){
    const f =this.factures.find(facture=>
      facture.id === id
    );

    this.isExist = this.panierService.isExist(f);

    if(this.isExist === false){
     
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
      
      this.isExist = false;
      this.panierService.addFactureToPanier(f);
     
    } else {
      this.panierService.removeFacture(f);
      this.isExist = true;
    
    }
    
  }




  tableau = [];
 


  test1(d,lastName: HTMLInputElement){
    console.log(lastName);
    //lastName.innerText='Enlever';
     if(lastName.innerText==='Enlever'){

      lastName.innerText='Ajouter';
      
      if(this.tableau.includes(lastName.id)){
        this.tableau.splice(this.tableau.indexOf(lastName.id),1);
        console.log('Enlever'+this.tableau);
     }
     
     } else if(lastName.innerText==='Ajouter'){
      lastName.innerText='Enlever';
      this.tableau.push(lastName.id);
      console.log('Ajouter'+this.tableau);
     }

   // lastName.hidden = true;
    //this.ajouter = lastName;
   // this.ref.nativeElement.hidden=false;
   //if(this.tableau.includes(lastName.id)){
   //  this.ref.nativeElement.hidden=false;
  //    this.tableau.splice(this.tableau.indexOf(lastName.id),1);
     // if(this.monElement.nativeElement.id == lastName.id){
     //   this.monElement.nativeElement.hidden=true
      //  this.monElement2.nativeElement.hidden=false
      //}
      
     // console.log('sdfsdfsdfsdf'+this.monElement);
  // }
  // else
  // { 
    //this.expression = 'Enlever'
   
  // }
  }

  test2(ref: HTMLInputElement){
  //  this.enlever = ref;
    console.log(ref);
    
    
   if(this.tableau.includes(ref.id)){
     this.lastNameInput.nativeElement.hidden=false;
      ref.hidden = true;
     // this.tableau.splice(this.tableau.indexOf(ref.id),1);
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
