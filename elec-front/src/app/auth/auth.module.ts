import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { FormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';



@NgModule({
  declarations: [AuthComponent, LogoutComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports :[AuthComponent]
})
export class AuthModule { }
