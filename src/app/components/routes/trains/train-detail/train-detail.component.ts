import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, concatMap } from 'rxjs';
import { Train } from 'src/app/models/train';
import { TrainService } from 'src/app/services/train.service';

@Component({
  selector: 'app-train-detail',
  templateUrl: './train-detail.component.html',
  styleUrls: ['./train-detail.component.css']
})
export class TrainDetailComponent {

  activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  trainService: TrainService = inject(TrainService);
  
  train: Observable<Train> = this.activatedRoute.paramMap.pipe(concatMap((param) => {
    const id = param.get('id');
    return this.trainService.getTrain(Number(id));
  }));
}
