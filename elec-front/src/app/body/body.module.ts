import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { TableComponent } from './table/table.component';
import { BordComponent } from './bord/bord.component';
import { DonneeModule } from '../donnee/donnee.module';
import { Affichage1Component } from './affichage1/affichage1.component';
import { Affichage2Component } from './affichage2/affichage2.component';
import { RouterModule } from '@angular/router';
import { JwtComponent } from './jwt/jwt.component';
import { JwtChantierComponent } from './jwt-chantier/jwt-chantier.component';
import { JwtUserComponent } from './jwt-user/jwt-user.component';
import { JwtChantierDetailsComponent } from './jwt-chantier-details/jwt-chantier-details.component';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [FormulaireComponent, TableComponent, BordComponent,Affichage1Component,Affichage2Component, JwtComponent, JwtChantierComponent, JwtUserComponent, JwtChantierDetailsComponent, UserComponent],
  imports: [
    CommonModule,
    DonneeModule,
    FormsModule,
    RouterModule
  ],
  exports:[FormulaireComponent, TableComponent, BordComponent]
})
export class BodyModule { }
