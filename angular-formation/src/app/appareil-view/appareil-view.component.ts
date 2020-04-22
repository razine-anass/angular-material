import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.css']
})
export class AppareilViewComponent implements OnInit {
 
  isAuth: boolean = false;
  appareilSouscription: Subscription;
  appareils: any [];
  lastDate = new Promise(
    (resolve, reject) => {
       const date = new Date();
       setTimeout(
        ()=>{   
          resolve(date);
       }, 4000);
    }
  )
   

  constructor(private appService: AppareilService){
    setTimeout(
      ()=>{   
      this.isAuth = true;
     }, 4000);
  }
  // la méthode ngOnInit est executer au moment de 
  //la création du compoment et après l'execution du constructeur
  ngOnInit(): void {
    //this.appareils = this.appService.appareils;
    //on fait une souscription
    this.appareilSouscription = this.appService.appareilSubject.subscribe(
      (appareils: any[])=>{
        this.appareils = appareils;
      }
    )
    //on fait emettre le subject
    // le subject va emetrre la copie des appareils du service
    this.appService.emitAppareilSubject();
  }

  onEteindre () {
    this.appService.switchOffAll();
  }
  
  onAllumer(){
    this.appService.switchOnAll();
  }

  onSave(){
    this.appService.saveAppareil();
  }

  onFetch(){
    this.appService.getAppareil();
  }


}
