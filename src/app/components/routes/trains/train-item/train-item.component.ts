import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Train } from 'src/app/models/train';

@Component({
  selector: 'app-train-item',
  templateUrl: './train-item.component.html',
  styleUrls: ['./train-item.component.css']
})
export class TrainItemComponent {

  @Input() trains: Observable<Train[]> = new Observable<Train[]>;
}
