import { Injectable } from '@angular/core';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    isAuth = false;

    signIn()  {
        //asynchrone
        return new Promise(
            (resolve,reject) => {
                setTimeout(
                    ()=>{
                        this.isAuth = true;
                        resolve(true)
                    },2000
                );
            }
        );
    }

    signOut(){
        console.log('deconnecter');
        this.isAuth = false;
    }
}