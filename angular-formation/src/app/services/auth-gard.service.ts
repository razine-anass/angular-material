import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGard implements CanActivate {


    constructor(private authService: AuthService,
                private router: Router) { }
    canActivate(
         route: ActivatedRouteSnapshot,
         state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {

        if(this.authService.isAuth == true){
            return true;
        } else {
            this.router.navigate['/auth'];
        }

    }

}
