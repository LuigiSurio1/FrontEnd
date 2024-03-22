import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { FordComponent } from './Pages/ford/ford.component';
import { FiatComponent } from './Pages/fiat/fiat.component';
import { AudiComponent } from './Pages/audi/audi.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'ford',
    component: FordComponent
  },
  {
    path: 'fiat',
    component: FiatComponent
  },
  {
    path: 'audi',
    component: AudiComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
