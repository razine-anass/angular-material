import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ChantierService } from 'src/app/services/chantier.service';
import { Subscription, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Chantier } from 'src/app/models/chantier.model';
import { ChantierTab } from 'src/app/interface/chantierTab';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material';


@Component({
  selector: 'app-chantier-list',
  templateUrl: './chantier-list.component.html',
  styleUrls: ['./chantier-list.component.css']
})
export class ChantierListComponent implements OnInit {

  chantier: Chantier[];
  // on ecrit une soucription  pour pouvoir detruire le subject
  chantiersSub: Subscription;


  //--------------------------------------------------------
  ELEMENT_DATA : ChantierTab[];
  displayedColumns: string[] = ['id', 'nom', 'adress', 'Action'];
  dataSource = new MatTableDataSource<ChantierTab>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private chantierService: ChantierService,
    private router: Router) {}
    
  ngOnInit() {
    this.reloadData();

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  reloadData() {
     // on recupere la liste des chantiers au chargement du component
     this.chantiersSub = this.chantierService.chantierSubject.subscribe(
      (chantier: any[])=>{
      //  this.chantier = chantier;
      this.dataSource.data = chantier  as ChantierTab[];
      }
    );
    this.chantierService.emitChantierlSubject();
    this.chantierService.getchantiers();
  }

  findChantierByNom(nom:string){
    
    const chantier = this.chantier.find(ch => ch.nom === nom);
      
    this.chantier.push(chantier);
  }

  deleteChantier(id: string) {
    this.chantierService.deletechantierById(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  chantierDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updateChantier(id: number){
    this.router.navigate(['update', id]);
  }

  applyFilter(filtre: string) {
    this.dataSource.filter = filtre.trim().toLowerCase();
  }
}
