import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { TableComponent } from './table/table.component';
import { BordComponent } from './bord/bord.component';
import { DonneeModule } from '../donnee/donnee.module';

@NgModule({
  declarations: [FormulaireComponent, TableComponent, BordComponent],
  imports: [
    CommonModule,
    DonneeModule,
    FormsModule
  ],
  exports:[FormulaireComponent, TableComponent, BordComponent]
})
export class BodyModule { }
