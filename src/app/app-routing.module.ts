import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainsComponent } from './components/routes/trains/trains.component';
import { HomeComponent } from './components/routes/home/home.component';
import { TicketsComponent } from './components/routes/tickets/tickets.component';
import { AboutComponent } from './components/routes/about/about.component';
import { TrainDetailComponent } from './components/routes/trains/train-detail/train-detail.component';
import { TicketFormComponent } from './components/routes/tickets/ticket-form/ticket-form.component';

const routes: Routes = [
  { path: 'trains', component: TrainsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'tickets', component: TicketsComponent },
  { path: 'about', component: AboutComponent},
  { path: 'train-detail/:id', component: TrainDetailComponent},
  { path: 'tickets-buy/:id', component: TicketFormComponent},
  // { path: "person/:personal_number", component: PersionDetailComponent },
  { path: '', redirectTo: '/home', pathMatch: 'prefix' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
