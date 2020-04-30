import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from '../app-routing.module';

//import { AuthGard } from '../services/auth-gard.service';







@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
