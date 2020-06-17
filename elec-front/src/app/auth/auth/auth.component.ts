import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm, ReactiveFormsModule  } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { JwtHelperService } from "@auth0/angular-jwt";


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  token:string;
  authError:string;
  username:string;
  roles:Array<string>;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmit1(form: NgForm){
    console.log(form);
    this.authService.login1(form.value.username,form.value.password)
      .subscribe(
        (data: any)=>{
            console.log(data);
            this.router.navigate(['body/bord/table']);
        },
        error => {
        }
      );
   // this.router.navigate(['appareils']);
  }

  onSubmit(form: NgForm){
    this.authService.login(form.value.username,form.value.password).subscribe(
      response=>{
          this.token = response.headers.get('Authorization');
          localStorage.setItem('token',this.token);
          this.router.navigate(['body/bord/table']);
          this.authService.parseJwt();
      },error=>{
          if(error.status == 403){
             this.authError = 'Mot de passe invalide';
          } else {
            this.authError = 'problème de connexion';
          }
      }
    );
  }

  
  
}
