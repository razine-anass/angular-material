import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private  url = 'http://localhost:8080/login';

  isAuth = false;

  constructor(private http: HttpClient) { }

  public login(username: string,password: string){

      const headers = new HttpHeaders(
      { Authorization: 'Basic ' + btoa(username + ':' + password) }
      );

      return this.http.get(this.url,{headers,responseType: 'text' as 'json'}).pipe(
        map(
            userData => {
              sessionStorage.setItem('username',username);
              let authString = 'Basic ' + btoa(username + ':' + password);
              sessionStorage.setItem('basicauth', authString);
              return userData;
            }
        )
      );
  } 

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username');
    this.isAuth = false;
  }
}
