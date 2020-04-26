import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private  url = 'http://localhost:8080/login';

  constructor(private http: HttpClient) { }

  public login(username: string,password: string){

    const headers = new HttpHeaders(
      { Authorization: 'Basic ' + btoa(username + ':' + password) }
      );

    return this.http.get(this.url,{headers,responseType: 'text' as 'json'})
  }
}
