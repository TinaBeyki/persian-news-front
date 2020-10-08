import {Injectable} from '@angular/core';
import {IUser} from '../_models/iuser';
import {last} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: IUser[] = [
    {id: 1, username: 'tbeyki', password: 'qazwsx', firstName: 'tina', lastName: 'beyki'},
    {id: 2, username: 'nolex', password: 'wsxedc', firstName: 'mohammad', lastName: 'beyki'}
  ];

  constructor() {
  }

  register(user: IUser): any {
    this.users.find((item) => {
      (user.username !== item.username && user.password !== item.password) ? this.addUser(user) : false;
    });
  }

  addUser(user: IUser): any {
    this.users.push(user);
  }
}
