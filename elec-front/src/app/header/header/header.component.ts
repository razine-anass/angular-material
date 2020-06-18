import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authservice: AuthService) { }

  ngOnInit() {
    let tokenExist = localStorage.getItem('token');
    let usernameExist = localStorage.getItem('username');
    if(tokenExist != null && usernameExist != null){
      localStorage.removeItem('token');
      localStorage.removeItem('username');
    }
  }

}
