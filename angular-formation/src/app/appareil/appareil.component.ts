import { Component, Input, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {

  @Input() nomAppareil: String;
  @Input() status: String;
  @Input() indexAppareil: number;
  @Input() param: number;
  

  constructor(private appService: AppareilService) { }

  ngOnInit() {
  }

  getStatus(){
    return this.status;
  }
  getColor(){
    if(this.status === 'allume'){
      return 'green';
    } else if (this.status === 'eteint'){
      return 'red';
    }
  }
  getBackroundColor(){
    if(this.status === 'allume'){
      return 'green';
    } else if (this.status === 'eteint'){
      return 'red';
    }
  }

  onSwitchOne(){
    this.appService.onSwitchOnOne(this.indexAppareil);
  }
  onSwitchOff(){
    this.appService.onSwitchOffOne(this.indexAppareil);
  }
}
