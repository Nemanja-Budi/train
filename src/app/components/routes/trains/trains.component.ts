import { Component, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Train } from 'src/app/models/train';
import { TrainService } from 'src/app/services/train.service';

@Component({
  selector: 'app-trains',
  templateUrl: './trains.component.html',
  styleUrls: ['./trains.component.css']
})
export class TrainsComponent {

  trainService: TrainService = inject(TrainService);
  trains: Observable<Train[]> = this.trainService.getTrains().pipe(map((trains) => trains.results));
}
