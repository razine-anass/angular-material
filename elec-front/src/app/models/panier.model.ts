import { facture } from './facture.model';

export class panier {
    
    public nom:string;
    public factures:facture[] = [];

    constructor(nom:string){
        this.nom = nom;
        
    }
}