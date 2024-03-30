import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstTodoComponent } from './components/first-todo/first-todo.component';
import { DoneComponent } from './pages/done/done.component';
import { NotCompletedComponent } from './pages/not-completed/not-completed.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { UsersComponent } from './pages/users/users.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FirstUserComponent } from './components/first-user/first-user.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstTodoComponent,
    DoneComponent,
    NotCompletedComponent,
    HomepageComponent,
    UsersComponent,
    NavbarComponent,
    FooterComponent,
    FirstUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
