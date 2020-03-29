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

  loadSprinner(){
    if(this.spinner) {
      this.spinner = false;
    } else {
      this.spinner = true;
    }
    
  }
}
