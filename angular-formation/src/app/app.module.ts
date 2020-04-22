import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//cli est un un outil qui permet d'executer des script à partire de la ligne de commande pour 
//la creation la structuration et la production d'une application angular
// npm permet d'installer d'autre package
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import { AppareilService } from './services/appareil.service';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component'
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AuthGard } from './services/auth-gard.service';
import { FormAppareilComponent } from './form-appareil/form-appareil.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './services/user.service';
import { FromReactUserComponent } from './from-react-user/from-react-user.component';
import { from } from 'rxjs';

const appRoutes: Routes = [
  { path : 'appareils', canActivate: [AuthGard], component : AppareilViewComponent },
  { path : 'appareils/:param',canActivate: [AuthGard], component : SingleAppareilComponent },
  { path : 'users', component : UserListComponent},
  { path : 'formReact', component : FromReactUserComponent },
  { path : 'form', canActivate: [AuthGard], component : FormAppareilComponent },
  { path : 'auth' , component : AuthComponent },
  { path : '' , component : AppareilViewComponent },
  { path : 'Not-Found' , component : FourOhFourComponent},
  //les deux etoils il faut tjrs les mettre à la fin:angular chercher les routes dans du haut vers le bas
  { path : '**' , redirectTo: '/Not-Found' }
]

@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    FourOhFourComponent,
    FormAppareilComponent,
    UserListComponent,
    FromReactUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AppareilService, AuthService, AuthGard, UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
