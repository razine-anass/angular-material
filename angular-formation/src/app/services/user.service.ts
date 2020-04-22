import { User } from '../modeles/user.modele';
import { Subject } from 'rxjs/internal/Subject';

export class UserService {
    private users: User[] = [
        {
            name: 'jilali',
            lastName: 'l3abra',
            email: 'jilali@hotmail.fr',
            drinkPreference: 'ataye',
            hoobies: [
                'femmes','voyage'
            ]
        }
    ];
    userSubject =  new Subject<User[]>();

    emitUser(){
        this.userSubject.next(this.users.slice());
    }
    addUser(user: User){
        this.users.push(user);
        this.emitUser();
    }
}