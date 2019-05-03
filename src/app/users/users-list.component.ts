import { Component, OnInit, EventEmitter, Inject } from '@angular/core';

import { IUser } from '../model/user';
import { UserService } from '../services/user.service';

class SortDirection {
  key: string;
  value: string;
  constructor(k: string, v: string) {
    this.key = k;
    this.value = v;
  }
}

enum SortColumns {
  FirstName,
  LastName,
  Phone,
  Address
}

@Component({
  selector: 'users-grid',
  templateUrl: './users-list.component.html'
})
export class UsersGridComponent implements OnInit {
  pageTitle = 'Users List';
  filteredUsers: IUser[];
  users: IUser[];
  errorMessage: string;

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

  sortDirections: SortDirection[];
  _firstNameSortDirection: SortDirection;
  _lastNameSortDirection: SortDirection;
  _phoneSortDirection: SortDirection;
  _addressSortDirection: SortDirection;
  get firstNameSortDirection(): SortDirection {
    return this._firstNameSortDirection;
  }
  set firstNameSortDirection(value: SortDirection) {
    this._firstNameSortDirection = value;
    this.clearInactiveSortColumns(SortColumns.FirstName);
    this.performSort(this.firstNameSortDirection, SortColumns.FirstName);
  }
  get lastNameSortDirection(): SortDirection {
    return this._lastNameSortDirection;
  }
  set lastNameSortDirection(value: SortDirection) {
    this._lastNameSortDirection = value;
    this.clearInactiveSortColumns(SortColumns.LastName);
    this.performSort(this.lastNameSortDirection, SortColumns.LastName);
  }
  get phoneSortDirection(): SortDirection {
    return this._phoneSortDirection;
  }
  set phoneSortDirection(value: SortDirection) {
    this._phoneSortDirection = value;
    this.clearInactiveSortColumns(SortColumns.Phone);
    this.performSort(this.phoneSortDirection, SortColumns.Phone);
  }
  get addressSortDirection(): SortDirection {
    return this._addressSortDirection;
  }
  set addressSortDirection(value: SortDirection) {
    this._addressSortDirection = value;
    this.clearInactiveSortColumns(SortColumns.Address);
    this.performSort(this.addressSortDirection, SortColumns.Address);
  }

  constructor(private _userService: UserService) {
  }

  ngOnInit(): void {
    this._userService.getUsers().subscribe(
      users => {
        this.users = users;
        this.filteredUsers = this.users;
      },
      error => this.errorMessage = <any>error
    );

    this.sortDirections = [
      new SortDirection('asc', 'A-Z'),
      new SortDirection('dsc', 'Z-A')
    ];
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

  performSort(value: SortDirection, column: SortColumns) {
    const data = this.filteredUsers;
    this.filteredUsers = data.sort((a, b) => {
      const isAsc = value.key === 'asc';
      switch (column) {
        case SortColumns.FirstName:
          return compare(a.firstName, b.firstName, isAsc);
        case SortColumns.LastName:
          return compare(a.lastName, b.lastName, isAsc);
        case SortColumns.Phone:
          return compare(a.phone, b.phone, isAsc);
        case SortColumns.Address:
          return compare(a.address, b.address, isAsc);
        default:
          return 0;
      }
    });
  }

  clearInactiveSortColumns(activeColumn: SortColumns) {
    this._firstNameSortDirection =
      activeColumn !== SortColumns.FirstName ? null : this._firstNameSortDirection;
    this._lastNameSortDirection =
      activeColumn !== SortColumns.LastName ? null : this._lastNameSortDirection;
    this._phoneSortDirection =
      activeColumn !== SortColumns.Phone ? null : this._phoneSortDirection;
    this._addressSortDirection =
      activeColumn !== SortColumns.Address ? null : this._addressSortDirection;
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
