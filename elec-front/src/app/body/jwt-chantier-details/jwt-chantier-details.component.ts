import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-jwt-chantier-details',
  templateUrl: './jwt-chantier-details.component.html',
  styleUrls: ['./jwt-chantier-details.component.css']
})
export class JwtChantierDetailsComponent implements OnInit {

  public host:string = 'http://localhost:8081/';
  public chantier:any;

  constructor(private http:HttpClient,private route:ActivatedRoute,private router: Router) {}

  ngOnInit() {
    // on soucrit un abonnoement sur l'ecouteur de gestion des evenement qui se produit dans le retour
    this.router.events.subscribe(
      event=> {
        if(event instanceof NavigationEnd){
          let params:number = this.route.snapshot.params['id'];
          this.afficherDetails(params);
        }
      }
    );
  }

  afficherDetails(id:number){
    console.log(this.route);
    this.http.get(this.host+'donnees/chantiers/'+id).subscribe(
      data=>{
              this.chantier = data;
              console.log(data);
      },error=>{

      }
    );
  }


}
