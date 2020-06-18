import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { panier } from '../models/panier.model';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
  })
  export class PanierService {
  
    private  url = 'http://localhost:8081/donnees/factures';
  
    public panierNom:string = 'Panier';
    public panier:panier;

    constructor(private http: HttpClient,
                private authservice:AuthService) {
                    if(this.authservice.isUserLoggedIn()){
                        this.loadPanier();
                    } else {

                    }
                 }

    public addFactureToPanier(facture:facture){
        
        this.panier.factures.push(facture);

    }

  }