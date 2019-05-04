import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="top-bar">
      <div class="top-bar-left">
        <ul class="menu">
          <li class="menu-text">{{ pageTitle }}</li>
          <li>
            <a class="nav-link" [routerLink]="['/start']">Start Page</a>
          </li>
          <li>
            <a class="nav-link" [routerLink]="['/users']">Users List</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="grid-container">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
  pageTitle = 'Test task (Frontend Developer)';
}
