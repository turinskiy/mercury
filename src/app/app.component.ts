import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div>
    <h1>{{title}}</h1>
    <users-grid></users-grid>
  </div>`,
})
export class AppComponent {
  title = 'Mercury Project';
}
