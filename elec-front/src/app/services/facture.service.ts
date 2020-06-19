import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { facture } from '../models/facture.model';

@Injectable({
  providedIn: 'root'
})
export class FactureService {

  private  url = 'http://localhost:8081/donnees/factures';

  constructor(private http: HttpClient) { }

  getFacturesAll(){
      return this.http.get(this.url);
  }

  getFactureById(id:number){
      return this.http.get(this.url+'/'+id);
  }

  getFacturePageable(page:number,size:number){

    let params = new HttpParams();
    params = params.append('page', page+'');
    params = params.append('size', size+'');

      return this.http.get(this.url+'/pageable',{params});
  }

  creerFacture(facture:facture){
      return this.http.post(this.url,facture);
  }

  updateFacture(facture:facture){
      return this.http.put(this.url,facture);
  }

  deleteFactureById(id:number){
      return this.http.delete(this.url+'/'+id);
  }
}