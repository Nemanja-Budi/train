import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Station } from 'src/app/models/station';
import { TrainService } from 'src/app/services/train.service';

@Component({
  selector: 'app-train-filtering',
  templateUrl: './train-filtering.component.html',
  styleUrls: ['./train-filtering.component.css']
})
export class TrainFilteringComponent {
  trainService: TrainService = inject(TrainService);
  stations: Observable<Station[]> = this.trainService.getStations();

  onGetSelectFrom(selectFrom: string): void {
    this.trainService.quearyParamsSubject.next({
      filter: {
        from: selectFrom,
        to: this.trainService.quearyParamsSubject.value.filter.to
      }
    });
  }

  onGetSelectTo(selectTo: string): void {
    this.trainService.quearyParamsSubject.next({
      filter: {
        from: this.trainService.quearyParamsSubject.value.filter.from,
        to: selectTo
      }
    });
  }
}
