import { Component, Input } from '@angular/core';
import { IUser } from '../model/user';

@Component({
  selector: 'user-row',
  templateUrl: './user-row.component.html',
  styles: [
    `
    .user-row div {
      border-top: 1px solid #cacaca;
    }
    .user-row:hover {
      background-color: #e6e6e6;
      cursor: pointer;
    }
    `
  ]
})
export class UserRowComponent {
  @Input() user: IUser;
}
