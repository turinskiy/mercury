import { Component, Input } from '@angular/core';
import { IUser } from './user';

@Component({
  selector: 'user-row',
  template: `
  <div class="row">
    <div class="col-md-3">{{ user.firstName }}</div>
    <div class="col-md-3">{{ user.lastName }}</div>
    <div class="col-md-3">{{ user.phone }}</div>
    <div class="col-md-3">{{ user.address }}</div>
  </div>
  `
})
export class UserRowComponent {
  @Input() user: IUser;

  logFoo() {
    console.log(this.user.firstName);
  }
}
