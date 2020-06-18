import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { ChantierDetailsComponent } from './chantier-details/chantier-details.component';
import { ChantierListComponent } from './chantier-list/chantier-list.component';
import { CreateChantierComponent } from './create-chantier/create-chantier.component';
import { Routes, RouterModule } from '@angular/router';
import { UpdateChantierComponent } from './update-chantier/update-chantier.component';
import { FormsModule } from '@angular/forms';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule, MatSortModule } from '@angular/material';
import { FactureListComponent } from './facture-list/facture-list.component';



const appRoutes: Routes = [
  { path: 'update/:id',  component: UpdateChantierComponent },
  { path: 'details/:id', component: ChantierDetailsComponent },
];

@NgModule({
  declarations: [ChantierDetailsComponent,ChantierListComponent,CreateChantierComponent,UpdateChantierComponent, FactureListComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule,
    MatSortModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ChantierDetailsComponent,ChantierListComponent,CreateChantierComponent, FactureListComponent]
})
export class DonneeModule { }
