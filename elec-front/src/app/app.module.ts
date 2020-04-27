import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { HeaderModule } from './header/header.module';
import { BodyModule } from './body/body.module';
import { HeaderComponent } from './header/header/header.component';
import { DonneeModule } from './donnee/donnee.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from './services/auth.service';
import { AuthInterceptorService } from './services/auth-interceptor.service';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HeaderModule,
    BodyModule,
    DonneeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule
  ],
  exports: [HeaderComponent],
  providers: [
    AuthService,
    {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptorService, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
