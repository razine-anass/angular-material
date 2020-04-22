import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';
import { ActivatedRoute } from '@angular/router';
import { Marque } from '../modeles/marque.modele';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.css']
})
export class SingleAppareilComponent implements OnInit {

  name: string = 'appareil';
  status: string = 'status';

  title = 'Marques :';
  marques: Array<Marque>;   
 

  constructor(private appareilService: AppareilService,
              private route: ActivatedRoute) { 
                this.marques = [
                  new Marque('Renault',1),
                  new Marque('Citroen',2),
                  new Marque('Mercedes',3),
                  new Marque('Ford',4)
                ];
              }

  ngOnInit() {
    const prm = this.route.snapshot.params['param'];
    //la constante param est de type string on rajoute (+) pour le caster en numbre
    this.name = this.appareilService.getAppareilById(+prm).name;
    this.status = this.appareilService.getAppareilById(+prm).status;
  }

  trackedBy(index, item) {
    return index;
  }

  addMarque(newMarque: string) {
    const size: number = this.marques.length;
    if (newMarque) {
      this.marques.push(new Marque(newMarque,size));
    }
  }

  removeMarque(marque: string) {
    const marqueObject = new Marque(marque,1);
    const index: number = this.marques.indexOf(marqueObject);
    if (index !== -1) {
        this.marques.splice(index, 1);
    }  
  }

}
