import { Component, OnInit } from '@angular/core';
import { Chantier } from 'src/app/models/chantier.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ChantierService } from 'src/app/services/chantier.service';

@Component({
  selector: 'app-update-chantier',
  templateUrl: './update-chantier.component.html',
  styleUrls: ['./update-chantier.component.css']
})
export class UpdateChantierComponent implements OnInit {

  chantier: Chantier;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private chantierService: ChantierService) { }

  ngOnInit() {
    //pour eviter l'erreur:Cannot read property 'id' of undefined
    this.chantier = new Chantier();
    const id = this.route.snapshot.params['id'];
    
    this.chantierService.getchantierByIdObervalble(id)
      .subscribe(data => {
        console.log(data)
        this.chantier = data;
      }, error => console.log(error));
  }

  updateChantier() {
    this.chantierService.updatechantierById(this.chantier)
      .subscribe(data => console.log(data), error => console.log(error));
    this.chantier = new Chantier();
    this.gotoList();
  }

  onSubmit() {
    this.updateChantier();    
  }

  gotoList() {
    this.router.navigate(['/body/bord/table']);
  }

}
