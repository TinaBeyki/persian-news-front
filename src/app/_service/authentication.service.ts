import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {IUser} from '../_models/iuser';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<IUser>;
  private currentUser: Observable<IUser>;
  private users: IUser[] = [];

  /*
  localStorage the data is persisted until user manually clears the browser cache or until your web application clears the data
  but in sessionStorage , the data is persisted only until the window or tab is closed
   */
  constructor(private userService: UserService) {
    this.users = this.userService.users;
    this.currentUserSubject = new BehaviorSubject<IUser>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();

  }

  public get currentUserValue() {
    return this.currentUserSubject.value;
  }

  login(username, password): any {
    return this.users.find((item) => {
      (item.username === username && item.password === password) ?
        localStorage.setItem('currentUser', JSON.stringify(item)):false;
      this.currentUserSubject.next(item);
    });
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
