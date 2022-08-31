import { DOCUMENT } from '@angular/common';
import {
  Component,
  EventEmitter,
  Inject,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class EventDetailsComponent implements OnInit {
  @Output() newEvent = new EventEmitter<boolean>();

  ngOnInit(): void {}

  displayForm(value: boolean) {
    this.newEvent.emit(value);
  }
}
