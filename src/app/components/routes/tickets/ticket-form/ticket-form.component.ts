import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, concatMap } from 'rxjs';
import { Ticket } from 'src/app/models/ticket';
import { Train } from 'src/app/models/train';
import { TrainService } from 'src/app/services/train.service';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.css']
})
export class TicketFormComponent implements OnInit {

  ticketForm: FormGroup;
  editingMode: boolean = true;

  activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  trainService: TrainService = inject(TrainService);
  router: Router = inject(Router);
  

  train: Observable<Train> = this.activatedRoute.paramMap.pipe(concatMap((param) => {
    const id = param.get('id');
    return this.trainService.getTrain(Number(id));
  }));

  constructor(private formBuilder: FormBuilder) {
    this.ticketForm = this.formBuilder.group({
      number: ['',Validators.required],
      from: ['',Validators.required],
      departure: ['',Validators.required],
      to: ['',Validators.required],
      arrival: ['',Validators.required],
      price: ['',Validators.required],
      name: ['',Validators.required],
      birthDate: ['',Validators.required],
    });
  }

  patchForm(): void {
    this.train.subscribe((value) => {
      this.ticketForm.patchValue(value);
    });
  }

  onSubmit(): void {
    if(!this.ticketForm.valid) return;
    const newTicket = new Ticket(this.ticketForm.value);
    this.trainService.newTicket(newTicket).subscribe((value) => {
      this.router.navigate(['/tickets']);
      this.ticketForm.get('name')?.reset();
      this.ticketForm.get('birthDate')?.reset();
    });
    
  }

  ngOnInit(): void {
    this.patchForm();
  }
}

