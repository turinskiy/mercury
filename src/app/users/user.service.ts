import { Injectable } from '@angular/core';
import { IUser } from './user';
import { USERS } from './mock-users';

@Injectable()
export class UserService {
  getUsers(): IUser[] {
    return USERS;
  }
}
