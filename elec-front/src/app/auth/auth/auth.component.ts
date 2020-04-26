import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm, ReactiveFormsModule  } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    console.log(form);
    this.authService.login(form.value.username,form.value.password)
      .subscribe(
        (data: any)=>{
            console.log(data);
            this.router.navigate(['body/bord/table']);
        }
      );
   // this.router.navigate(['appareils']);
  }

}
