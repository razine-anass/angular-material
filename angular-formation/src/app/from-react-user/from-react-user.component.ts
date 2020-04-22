import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { User } from '../modeles/user.modele';

@Component({
  selector: 'app-from-react-user',
  templateUrl: './from-react-user.component.html',
  styleUrls: ['./from-react-user.component.css']
})
export class FromReactUserComponent implements OnInit {

  userForm: FormGroup;

  constructor(private formBuilder:  FormBuilder,
              private userSevice: UserService,
              private router : Router) { }

  ngOnInit() {
    this.initFormGroup();
  }

  //cette  methode cree un objet de type form group qui corespond au formulaire dans le 
  //template avec les diffirent champ
  initFormGroup(){
    this.userForm = this.formBuilder.group(
      {name: [ '', Validators.required ],
       lastName: [ '', Validators.required ],
       email: [ '' , [ Validators.required, Validators.email ] ],
       drinkPreference: [ '', Validators.required ],
       hoobies: this.formBuilder.array([])
      }
    )
  }

  onSubmitForm(){
    const userForm = this.userForm.value;
    const user = new User(
      userForm['name'],
      userForm['lastName'],
      userForm['email'],
      userForm['drinkPreference'],
      userForm['hoobies'] ? userForm['hoobies'] : []
    );
    this.userSevice.addUser(user);
    this.router.navigate(['/users']);
  }

  getHobbies(){
    // on convertie le control hobbies du formulaire en Array
    return this.userForm.get('hoobies') as FormArray;
  }

  addHobby() {
    // on ajoute les champs hobby au formulair.
    const hobby = this.formBuilder.control('', Validators.required);
    this.getHobbies().push(hobby);
  }
}
