import { Component, Input } from '@angular/core';
import { IUser } from '../model/user';

@Component({
  selector: 'user-row',
  template: `
  <div class="row" [routerLink]="['/users', user.id]">
    <div class="col-md-3">{{ user.firstName }}</div>
    <div class="col-md-3">{{ user.lastName }}</div>
    <div class="col-md-3">{{ user.phone }}</div>
    <div class="col-md-3">{{ user.address }}</div>
  </div>
  `
})
export class UserRowComponent {
  @Input() user: IUser;
}
