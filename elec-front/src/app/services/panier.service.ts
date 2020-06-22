import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { panier } from '../models/panier.model';
import { AuthService } from './auth.service';
import { facture } from '../models/facture.model';
@Injectable({
    providedIn: 'root'
  })
  export class PanierService {
  
    private  url = 'http://localhost:8081/donnees/factures';
  
     panierNom:string = 'Panier';
     panier:panier= new panier('panier-factures');
     facture:facture;

    constructor(private http: HttpClient,
                private authservice:AuthService) {
                    if(this.authservice.isUserLoggedIn()){
                        this.loadPanier();
                    } else {

                    }
                 }
    loadPanier(){
       this.panier.factures = [];
    }            

    public addFactureToPanier(facture:facture){
        
        this.panier.factures.push(facture);

    }

    public removeFacture(facture:facture){
       
        const index: number = this.panier.factures.indexOf(facture);
        if (index !== -1) {
            this.panier.factures.splice(index, 1);
        }
    }

    isExist(facture:facture):boolean {
       
      const f =  this.panier.factures.find(fact=>
            fact.id === facture.id
         );

        if(f != null) {
            return true;
        } else {
            return false;
        }
    }
  }