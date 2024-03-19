import { Component, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Ticket } from 'src/app/models/ticket';
import { TrainService } from 'src/app/services/train.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent {
  
  trainService: TrainService = inject(TrainService);
  tickets: Observable<Ticket[]> = this.trainService.getTickets().pipe(map((tickets) => tickets.results));

  onDeleteTicket(ticket_id: number): void {
    this.trainService.deleteTicket(ticket_id).subscribe((value) => {
      this.tickets = this.trainService.getTickets().pipe(map((tickets) => tickets.results));
    });
  }
}
