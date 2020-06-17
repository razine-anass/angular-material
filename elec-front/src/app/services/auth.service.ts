import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private  url = 'http://localhost:8081/login';

  isAuth = false;
  authError:string;

  username:string;
  roles:Array<string>;
  token:string;
  usernamejwt: string;

  constructor(private http: HttpClient) { }


  public login(username: string,password: string){

    this.username = username;

    const params = {
      username: username,
      password: password
    }
    
    return this.http.post(this.url,params,{ observe: 'response' });
} 

  public login1(username: string,password: string){

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
   // let user = sessionStorage.getItem('username')
    //console.log(!(user === null))
    //return !(user === null)

    let token = localStorage.getItem('token');
    if(token != null){
      const helper = new JwtHelperService();
 
      const decodedToken = helper.decodeToken(token);
      this.usernamejwt = decodedToken.sub;
      return (this.usernamejwt  === this.username)
    }
  }

  logOut() {
  //  sessionStorage.removeItem('username');
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    this.isAuth = false;
  }
}
