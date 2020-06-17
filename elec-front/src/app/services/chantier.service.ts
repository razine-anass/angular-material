import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Chantier } from '../models/chantier.model';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class ChantierService {

  private  url = 'http://localhost:8081/donnees/chantiers';

  chantiers: Chantier[] = [];

  //emet l'arraye chantiers
  chantierSubject = new Subject<Chantier[]>();

  constructor(private http: HttpClient) { }

  //elle fait emettre le subject
  emitChantierlSubject(){
    // il prend le contenu de l'array chantiers et l'emettra à travers le subject chantierSubject
   this.chantierSubject.next(this.chantiers.slice());
  }

  

  //return this.http.get(this.url,{headers,responseType: 'text' as 'json'})

  getchantiers(){
  //  const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa('razine' + ':' + 'rayane') });
      
    this.http.get<any[]>(this.url)
    .subscribe(
      (response)=>{
        this.chantiers = response ? response : [];
        this.emitChantierlSubject();
      },(error)=>{
        console.log('error'+error);
        }
      );
  }
 
  getchantierById(id: string){
    const params = {
      id: id
    }

    this.http.get<any[]>(this.url,  { params })
    .subscribe(
      (response)=>{
        this.chantiers = response;
        this.emitChantierlSubject();
      },(error)=>{
        console.log('error'+error);
        }
      );
  }

  //la methode est asynchrone car il retourn une promisse et elle doit etre appelé dans une promisse
  getchantierByIdPromise(id: string) {
    const params = {
      id: id
    }
    
  //  return this.http.get<any[]>(this.url, { params }).toPromise();
    return new Promise(
      (resolve, reject) => {
    // une fonction asyn nous permet de faire .then()
       this.http.get<any>(this.url,  { params }).toPromise().then(
         (data) =>{
            console.log(data);
    // le resolve veut dire que la promesse à reçus la réponse avec succés
               resolve(data[0]);
          },(error) => {
    // la promesse a reçu une réponse “error”
          reject(error)
        }
        )
      }
    );

   // return this.http.get<any[]>(this.url,  { params })
  }

  getchantierByIdObervalble(id: string): Observable<any> {
    
    return this.http.get<Chantier>(this.url+'/'+id);
  }


  savechantier(chantier: Chantier) : Observable<any>{
    return this.http.post(this.url,chantier);
  }

  savechantierSybject(chantier: Chantier){
     this.http.post(this.url,chantier).subscribe(
      (data)=>{
        console.log(data+'success');

      },(error)=>{
        console.log('error'+error);
        
        }
      );
      this.emitChantierlSubject();
  }

  updatechantierById(chantier: Chantier) : Observable<any>{
  //  const headers = new HttpHeaders(
   //   { Authorization: 'Basic ' + btoa('razine' + ':' + 'rayane') }
   //   );
    //  return this.http.put<any[]>(this.url,  chantier,{headers})
    return this.http.put<any[]>(this.url,  chantier)
  }

  deletechantierById(id: string){
    const reportProgress = true;
    
    const params = {
      id: id
    }

    const httpOptions = {
      headers: new HttpHeaders({
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Request-Headers": "*",
        'Access-Control-Allow-Methods': 'DELETE, OPTIONS',
        "Access-Control-Allow-Headers": "Origin, X-Requested-With,X-HTTP-Method-Override, Content-Type, Accept, Authorization"
      })
    };
    
    return this.http.delete(this.url+'/'+id);
  }

  public getImage(){
    return this.http.get(this.url+'/photos');
  } 
}
