import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { DoneComponent } from './pages/done/done.component';
import { NotCompletedComponent } from './pages/not-completed/not-completed.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  {
    path:'',
    component: HomepageComponent,
    title: 'Todos'
  },
  {
    path: 'done',
    component: DoneComponent,
    title: 'Todos Done'
  },
  {
    path: 'not-completed',
    component: NotCompletedComponent,
    title: 'Todos not-completed'
  },
  {
    path: 'users',
    component: UsersComponent,
    title: 'Users Todos'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
