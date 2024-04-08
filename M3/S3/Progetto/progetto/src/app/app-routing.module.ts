
import { NgModule, Component} from '@angular/core';
import { RouterModule} from '@angular/router';

import { Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { MoviesComponent } from './Components/movies/movies.component';
import { ProfilesComponent } from './Components/profiles/profiles.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { MoviesListComponent } from './Components/movies-list/movies-list.component';

export const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      { path: '', redirectTo: 'movies-list', pathMatch: 'full' },
      { path: 'movies', component: MoviesComponent },
      { path: 'movies-list', component: MoviesListComponent },
      { path: 'profiles', component: ProfilesComponent },
      { path: 'profile', component: ProfileComponent },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
