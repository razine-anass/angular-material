import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppareilService } from '../services/appareil.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-appareil',
  templateUrl: './form-appareil.component.html',
  styleUrls: ['./form-appareil.component.css']
})
export class FormAppareilComponent implements OnInit {

  defaultValueSelect = 'eteint';

  constructor(private appService: AppareilService,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    console.log(form);
    this.appService.appAppreil(form.value.name,form.value.status);
   // this.router.navigate['./appareils'];
    this.router.navigate(['appareils']);
  }

}
