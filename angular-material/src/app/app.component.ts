import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-material';
  test = 1;
  notif = 'anass';
  progressSpinner = 100;
  spinner = false;
  value = 'apparaitre';
  opened = false;

  loadSprinner(){
    if(this.spinner) {
      this.spinner = false;
      this.value = 'apparaitre'
    } else {
      this.spinner = true;
      this.value = 'disparaitre'
    }
  }
  log(sm) {
    console.log(sm);
  }
}
