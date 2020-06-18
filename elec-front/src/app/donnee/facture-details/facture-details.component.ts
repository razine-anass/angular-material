import { Component, OnInit } from '@angular/core';
import { FactureService } from 'src/app/services/facture.service';
import { facture } from 'src/app/models/facture.model';
import { Router, ActivatedRoute } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-facture-details',
  templateUrl: './facture-details.component.html',
  styleUrls: ['./facture-details.component.css']
})
export class FactureDetailsComponent implements OnInit {
  
  facture:facture;

  constructor(private factureService: FactureService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
   
    const id = this.route.snapshot.params['id'];
    this.factureService.getFactureById(id).subscribe(
      (data: any)=>{
        console.log(data);
        this.facture = data.body;
       },error=>{
        console.log();
       }
     );
  }

  back(){
    this.router.navigate(['/factures']);
  }

}
