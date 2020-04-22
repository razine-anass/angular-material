import { Component, OnInit, OnDestroy } from '@angular/core';
import { from, interval, Observable, Subscription } from 'rxjs';
//observable emet des informations à chaque observable est associé un observeur qui est un bloc de code qui
// executé à chque fois que l'observeur emet des données

//Le subject est un autre type d'observable qui permet non seulement de recevoir des informations mais 
//de choisir les informations qui seront emises

//l'operateur se place entre le subject,l'obeservable et la souscription permet de modifier ou filtrer
// des donnes emise par observable ou subject avant qu'ils n'arrivent à une soucription par ex map(),filtr()

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

secondes: number;
soucription: Subscription;

constructor(){}
  

ngOnInit() {
  const compteur = interval(2000);
  // on fait une  soucription
 // this.soucription = compteur.subscribe(
 //   (value: number)=>{
  //    this.secondes = value;
  //  }
//)
this.secondes = 15;
  //compteur.subscribe(
  //  (value: number)=>{
  //    this.secondes = value;
  //  },(error: any)=>{
  //    console.log('erreur');
  //  },()=>{
  //    console.log('observable completé');
   // }
  //)
}

ngOnDestroy(): void {
  this.soucription.unsubscribe();
}
 
}
