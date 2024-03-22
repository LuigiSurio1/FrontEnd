import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RandomCardComponent} from './secondary-components/random-card/random-card.component'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { FiatComponent } from './Pages/fiat/fiat.component';
import { FordComponent } from './Pages/ford/ford.component';
import { AudiComponent } from './Pages/audi/audi.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    FiatComponent,
    FordComponent,
    AudiComponent,
    RandomCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
