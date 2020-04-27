import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGard implements CanActivate {

    constructor(private router: Router,
                 private authService: AuthService) { }
    
      canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.authService.isUserLoggedIn())
          return true;
    
        this.router.navigate(['auth/auth']);
        return false;
    
      }
}