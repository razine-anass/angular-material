import { Data } from "@angular/router";
import { Chantier } from './chantier.model';

export class facture {
    id:number;
    ref:string;
    date:Date;
    statut:string;
    chantier:Chantier;

    constructor(){}
}