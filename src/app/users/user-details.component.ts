import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import { IUser } from '../model/user';
import { UserService } from './../services/user.service';

@Component({
  templateUrl: './user-details.component.html',
})
export class UserDetailsComponent implements OnInit {
  pageTitle = 'User Details';
  user: IUser;
  errorMessage: string;

  constructor(private _route: ActivatedRoute, private _userService: UserService) { }

  ngOnInit() {
    const id = +this._route.snapshot.paramMap.get('id');
    this._userService.getUsers().subscribe(
      users => {
        this.user = users.find(u => u.id === id);
      },
      error => this.errorMessage = <any>error
    );
  }

  getFullName(): string {
    return this.user.firstName + ' ' + this.user.lastName;
  }
}
