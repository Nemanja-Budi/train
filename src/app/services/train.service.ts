import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, switchMap } from 'rxjs';
import { TrainSearchResult } from '../models/trainSearchResult';
import { Station } from '../models/station';
import { Train } from '../models/train';
import { Ticket } from '../models/ticket';
import { TicketSearchResult } from '../models/ticketSearchResult';

export type SortingQP = {
  filter: {
    from: string;
    to: string;
  }
}

@Injectable({
  providedIn: 'root'
})
export class TrainService {
 
  quearyParams: SortingQP = {
    filter: {
      from: '',
      to: '',
    }
  }
    
  quearyParamsSubject: BehaviorSubject<SortingQP> = new BehaviorSubject<SortingQP>(this.quearyParams);
  
  constructor(private http: HttpClient) { }

  getTrains(): Observable<TrainSearchResult> {
    return this.quearyParamsSubject.pipe(
      switchMap(params => {
        const options = {
          params: new HttpParams()
            .set('filter', params.filter && JSON.stringify(params.filter) || "")
        };
        return this.http.get<TrainSearchResult>(`http://localhost:3000/api/trains`, options);
      })
    );
  }

  getTrain(train_id: number): Observable<Train> {
    return this.http.get<Train>(`http://localhost:3000/api/trains/${train_id}`);
  }

  getStations(): Observable<Station[]> {
    return this.http.get<Station[]>(`http://localhost:3000/api/stations`);
  }

  newTicket(newTicket: Ticket): Observable<Ticket> {
    return this.http.post<Ticket>(`http://localhost:3000/api/tickets`, newTicket)
  }

  getTickets(): Observable<TicketSearchResult> {
    return this.http.get<TicketSearchResult>(`http://localhost:3000/api/tickets`);
  }

  deleteTicket(ticket_id: number): Observable<Ticket> {
    return this.http.delete<Ticket>(`http://localhost:3000/api/tickets/${ticket_id}`);
  }
}
