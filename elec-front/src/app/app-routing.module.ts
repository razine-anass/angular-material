import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth/auth.component';
import { FormulaireComponent } from './body/formulaire/formulaire.component';
import { TableComponent } from './body/table/table.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { BordComponent } from './body/bord/bord.component';
import { Affichage1Component } from './body/affichage1/affichage1.component';
import { Affichage2Component } from './body/affichage2/affichage2.component';
import { AuthGard } from './services/auth-gard.service';

//const routes: Routes = [];


const routes: Routes = [
  { path : 'auth/auth', component : AuthComponent},
  //{ path : 'body/bord/formulaire' , canActivate: [AuthGard] ,  component : FormulaireComponent},
  { path : 'body/bord/formulaire' , canActivate: [AuthGard] , component : FormulaireComponent},
  { path : 'body/bord/table' , canActivate: [AuthGard] , component : TableComponent},
  { path : 'auth/logout', component : LogoutComponent},
  { path : '', redirectTo:'body/bord/formulaire',pathMatch:'full'},
  { path : 'body/bord/bord' ,  component : BordComponent, children: [
                                                                      {
                                                                        path: 'affichage1',
                                                                        component: Affichage1Component
                                                                      },
                                                                      {
                                                                        path: 'affichage2',
                                                                        component: Affichage2Component
                                                                      },
                                                                      {
                                                                        path: '',
                                                                        redirectTo: 'affichage1',
                                                                        pathMatch: 'full'
                                                                      }
                                                                    ]
                                                                    ,canActivate:  [AuthGard]
  }
  //,
  //{ path: '**', component: FormulaireComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
