import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AppareilService {

  appareilSubject = new Subject<any[]>();

  private appareils = [
    {
      id: 1,
      name: 'radio',
      status: 'eteint'
    },
    {
      id: 2,
      name: 'tele',
      status: 'allume'
    },
    {
      id: 3,
      name: 'lampe',
      status: 'eteint'
    }
  ];

  constructor(private http: HttpClient) { }

  emitAppareilSubject(){
    this.appareilSubject.next(this.appareils.slice());
  }

  switchOnAll() {
    this.appareils.forEach(element => {
       element.status = 'allume';
     });
     this.emitAppareilSubject();
  }
  switchOffAll() {
    for (let index = 0; index < this.appareils.length; index++) {
      const element = this.appareils[index];
      element.status = 'eteint';
    }
    this.emitAppareilSubject();
  }

  onSwitchOnOne(index: number){
    this.appareils[index].status = 'allume';
    this.emitAppareilSubject();
  }
  onSwitchOffOne(index: number) {
    this.appareils[index].status = 'eteint';
    this.emitAppareilSubject();
  }

  getAppareilById(id: number){
    const appareil = this.appareils.find(
      (appareil)=>{
        return appareil.id === id;
      }
    )
    return appareil;
  }

  appAppreil(name: string,status: string){
    const appr = {
      id:0,
      name: name,
      status: status
    }
    appr.id = this.appareils[this.appareils.length-1].id + 1;
    console.log(appr);
    this.appareils.push(appr);
    this.emitAppareilSubject();
  }

  saveAppareil(){
    this.http.put('http://localhost:8080/appareils/appareil',this.appareils)
    .subscribe(
      ()=>{
        console.log('success');

      },(error)=>{
        console.log('error'+error);
        
        }
      );
  }
  getAppareil(){
    const params = {
      name: 'razine',
      status: 'allume'
    }
    const url = 'http://localhost:8080/appareils/appareilParam';

    //'http://localhost:8080/appareils/appareilParam?'+'name='+name+'&status='+status
    this.http.get<any[]>(url,  { params })
    .subscribe(
      (response)=>{
        this.appareils = response;
        this.emitAppareilSubject();
      },(error)=>{
        console.log('error'+error);
        }
      );
  }
}
