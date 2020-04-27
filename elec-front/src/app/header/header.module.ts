import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { Routes,RouterModule } from '@angular/router';
import { AuthComponent } from '../auth/auth/auth.component';
import { FormulaireComponent } from '../body/formulaire/formulaire.component';
import { TableComponent } from '../body/table/table.component';
import { BordComponent } from '../body/bord/bord.component';
import { AuthGard } from '../services/auth-gard.service';
import { LogoutComponent } from '../auth/logout/logout.component';
//import { AuthGard } from '../services/auth-gard.service';

const appRoutes: Routes = [
  { path : 'auth/auth', component : AuthComponent},
  { path : 'body/bord/formulaire', component : FormulaireComponent},
  { path : 'body/bord/table', canActivate: [AuthGard] , component : TableComponent},
  { path : 'body/bord/bord' , component : BordComponent},
  { path : 'auth/logout', component : LogoutComponent}
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
