import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../modeles/user.modele';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit,OnDestroy {
 
  users: User[];
  userSubscription: Subscription;


  constructor(private userService: UserService) { }
  

  ngOnInit() {
    //à la création du component UserListComponent il se soucrit au subject userSubject 
    this.userSubscription = this.userService.userSubject.subscribe(
      //le subject emet un array de type user 
      (users: User[])=>{
        this.users = users;
      }
    );
    // on fait emettre le subject
    this.userService.emitUser();
  }

  ngOnDestroy(): void {
    // on annule la souscription à la distruction du component
    this.userSubscription.unsubscribe();
  }

}
