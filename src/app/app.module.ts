import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersGridComponent } from './users/users-list.component';
import { UserRowComponent } from './users/user-row.component';
import { UserService } from './users/user.service';
import { USERS } from './users/mock-users';

@NgModule({
  declarations: [
    AppComponent,
    UsersGridComponent,
    UserRowComponent,
    // USERS
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  bootstrap: [AppComponent],
  providers: [UserService],
})
export class AppModule { }
