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
import { MatFormFieldModule, MatSortModule, MatIconModule, MatButtonModule} from '@angular/material';
import { FactureListComponent } from './facture-list/facture-list.component';
import { CreateFactureComponent } from './create-facture/create-facture.component';
import { FactureDetailsComponent } from './facture-details/facture-details.component';



const appRoutes: Routes = [
  { path: 'update/:id',  component: UpdateChantierComponent },
  { path: 'details/:id', component: ChantierDetailsComponent },
  { path: 'details-facture/:id', component: FactureDetailsComponent },
];

const MaterialModule = [MatIconModule,MatTableModule,MatPaginatorModule,MatInputModule,MatFormFieldModule
                       ,MatSortModule,MatButtonModule]

@NgModule({
  declarations: [ChantierDetailsComponent,ChantierListComponent,CreateChantierComponent,UpdateChantierComponent, FactureListComponent, CreateFactureComponent,FactureDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ChantierDetailsComponent,ChantierListComponent,CreateChantierComponent, FactureListComponent, FactureDetailsComponent]
})
export class DonneeModule { }
