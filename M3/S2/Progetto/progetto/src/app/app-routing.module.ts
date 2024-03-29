import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { DoneComponent } from './pages/done/done.component';
import { UsersComponent } from './pages/users/users.component';
import { CorporalComponent } from './pages/corporal/corporal.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'done',
    component: DoneComponent,
  },
  {
    path: 'todo',
    component: CorporalComponent,
  },
  {
    path: "users",
    component: UsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
