import { Component, OnInit } from '@angular/core';
import { Chantier } from 'src/app/models/chantier.model';
import { Router } from '@angular/router';
import { ChantierService } from 'src/app/services/chantier.service';

@Component({
  selector: 'app-create-chantier',
  templateUrl: './create-chantier.component.html',
  styleUrls: ['./create-chantier.component.css']
})
export class CreateChantierComponent implements OnInit {

  chantier: Chantier = new Chantier();
  submitted = false;

  constructor(private chantierService: ChantierService,
    private router: Router) { }

  ngOnInit() {
  }

  newChantier(): void {
    this.submitted = false;
    this.chantier = new Chantier();
  }

  save() {
    this.chantierService.savechantier(this.chantier)
      .subscribe((data) => {
        console.log(data);
        this.gotoList();
      },
       (error) => 
        console.log(error)
      
      );
    this.chantier = new Chantier();
    
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/body/bord/table']);
  }

}
