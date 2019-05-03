import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UsersGridComponent } from './users/users-list.component';
import { UserRowComponent } from './users/user-row.component';
import { UserService } from './services/user.service';
import { UserDetailsComponent } from './users/user-details.component';
import { UserDetailsGuard } from './users/user-details.guard';
import { StartPageComponent } from './start/start-page.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersGridComponent,
    UserRowComponent,
    UserDetailsComponent,
    StartPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'users', component: UsersGridComponent },
      {
        path: 'users/:id',
        canActivate: [UserDetailsGuard],
        component: UserDetailsComponent
      },
      { path: 'start', component: StartPageComponent },
      { path: '', component: StartPageComponent, pathMatch: 'full' },
      { path: '**', component: StartPageComponent, pathMatch: 'full' }
    ])
  ],
  bootstrap: [AppComponent],
  providers: [UserService]
})
export class AppModule {}
