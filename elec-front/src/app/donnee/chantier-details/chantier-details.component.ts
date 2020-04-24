import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChantierService } from 'src/app/services/chantier.service';
import { Chantier } from 'src/app/models/chantier.model';
import { Subscription, Observable } from 'rxjs';


@Component({
  selector: 'app-chantier-details',
  templateUrl: './chantier-details.component.html',
  styleUrls: ['./chantier-details.component.css']
})
export class ChantierDetailsComponent implements OnInit {

  chantier: Chantier;
  
  chantiersObs: Observable<Chantier[]>;

  

  constructor(private chantierService: ChantierService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    //this.getChantierPromise();
    this.getChantierObser();
  }
  
  getChantierPromise(){
   const id = this.route.snapshot.params['id'];
    this.chantierService.getchantierByIdPromise(id).then(
        (data: Chantier)=>{
          this.chantier = data;
        },(error)=>{
          console.log(error);
        }
      );
    }
  getChantierObser(){
    const id = this.route.snapshot.params['id'];
    this.chantierService.getchantierByIdObervalble(id)
       .subscribe( 
         (data: Chantier)=>{
            this.chantier = data;
          },(error) => {
            console.log(error);
          });
  }

  back(){
    this.router.navigate(['/body/bord/table']);
  }

}
