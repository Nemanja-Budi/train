import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/routes/home/home.component';
import { AboutComponent } from './components/routes/about/about.component';
import { TrainsComponent } from './components/routes/trains/trains.component';
import { TicketsComponent } from './components/routes/tickets/tickets.component';
import { HeaderComponent } from './components/core/header/header.component';
import { NavbarComponent } from './components/core/navbar/navbar.component';
import { TrainFilteringComponent } from './components/routes/trains/train-filtering/train-filtering.component';
import { TrainItemComponent } from './components/routes/trains/train-item/train-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TrainDetailComponent } from './components/routes/trains/train-detail/train-detail.component';
import { TicketFormComponent } from './components/routes/tickets/ticket-form/ticket-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    TrainsComponent,
    TicketsComponent,
    HeaderComponent,
    NavbarComponent,
    TrainFilteringComponent,
    TrainItemComponent,
    TrainDetailComponent,
    TicketFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
