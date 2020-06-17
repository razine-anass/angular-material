import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jwt-chantier',
  templateUrl: './jwt-chantier.component.html',
  styleUrls: ['./jwt-chantier.component.css']
})
export class JwtChantierComponent implements OnInit {

  public host:string = 'http://localhost:8081/';
  public chantiers:any;
  public chantier:any;
  public details:boolean = false;
  public active:any;

  constructor(private http: HttpClient,private router:Router) { }

  ngOnInit() {
    this.http.get(this.host+'donnees/chantiers').subscribe(
      data=>{
         this.chantiers = data;
      },
      error=>{
      }
    );
  }

  getChantier(id:number){

    this.active = id;
    //il y de mannier de faire une redirection soit avec routerLink ou  this.router.navigate
    this.router.navigate(['/body/jwt/details', id]);
  }

}
