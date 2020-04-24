import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { Routes,RouterModule } from '@angular/router';
import { AuthComponent } from '../auth/auth/auth.component';
import { FormulaireComponent } from '../body/formulaire/formulaire.component';
import { TableComponent } from '../body/table/table.component';
import { BordComponent } from '../body/bord/bord.component';

const appRoutes: Routes = [
  { path : 'auth/auth', component : AuthComponent},
  { path : 'body/bord/formulaire', component : FormulaireComponent},
  { path : 'body/bord/table' , component : TableComponent},
  { path : 'body/bord/bord' , component : BordComponent}
]

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
