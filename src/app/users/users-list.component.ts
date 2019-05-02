import { Component, OnInit, EventEmitter } from '@angular/core';
import { IUser } from './user';
// import { UserService } from './user.service';
import { USERS } from './mock-users';
import { ValueTransformer } from '@angular/compiler/src/util';

class SortDirection {
  key: string;
  value: string;
  constructor(k: string, v: string) {
    this.key = k;
    this.value = v;
  }
}

@Component({
  selector: 'users-grid',
  templateUrl: './users-list.component.html'
})
export class UsersGridComponent implements OnInit {
  pageTitle = 'Users List';
  filteredUsers: IUser[];
  users: IUser[];

  _searchValue: string;
  get searchValue(): string {
    return this._searchValue;
  }
  set searchValue(value: string) {
    this._searchValue = value;
    this.filteredUsers = this.searchValue
      ? this.performSearch(this.searchValue)
      : this.users;
  }

  directions: SortDirection[];
  _firstNameSortDirection: SortDirection;
  _lastNameSortDirection: SortDirection;
  get firstNameSortDirection(): SortDirection {
    return this._firstNameSortDirection;
  }
  set firstNameSortDirection(value: SortDirection) {
    this._firstNameSortDirection = value;
    this.performSort(this.firstNameSortDirection, 'firstName');
  }
  get lastNameSortDirection(): SortDirection {
    return this._lastNameSortDirection;
  }
  set lastNameSortDirection(value: SortDirection) {
    this._lastNameSortDirection = value;
    this.performSort(this.lastNameSortDirection, 'lastName');
  }

  constructor(/*private _userService: UserService*/) {
    // this.searchValue = 'petya';
  }
  performSearch(searchTerm: string): IUser[] {
    searchTerm = searchTerm.toLocaleLowerCase();
    // const reg = new RegExp(`*${searchTerm}*`, 'gi');
    // return reg.test(user.firstName) || reg.test(user.lastName);
    const temp = this.users.filter(
      (user: IUser) => user.firstName.toLowerCase().indexOf(searchTerm) !== -1
    );
    return temp;
  }

  ngOnInit(): void {
    this.users = USERS; // this._userService.getUsers();
    this.filteredUsers = this.users;
    this.directions = [
      new SortDirection('asc', 'A-Z'),
      new SortDirection('dsc', 'Z-A')
    ];
    this._firstNameSortDirection = null;
  }

  performSort(value: SortDirection, column: string) {
    const data = this.filteredUsers;
    this.filteredUsers = data.sort((a, b) => {
      const isAsc = value.key === 'asc';
      switch (column) {
        case 'firstName': return compare(a.firstName, b.firstName, isAsc);
        case 'lastName': return compare(a.lastName, b.lastName, isAsc);
        default: return 0;
      }
    });
  }
}
function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
