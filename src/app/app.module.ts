import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UsersGridComponent } from './users/users-list.component';
import { UserRowComponent } from './users/user-row.component';
import { UserService } from './services/user.service';
import { UserDetailsComponent } from './users/user-details.component';

@NgModule({
  declarations: [AppComponent, UsersGridComponent, UserRowComponent, UserDetailsComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  bootstrap: [AppComponent],
  providers: [UserService]
})
export class AppModule {}
