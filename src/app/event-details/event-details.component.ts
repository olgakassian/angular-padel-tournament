import { DOCUMENT } from '@angular/common';
import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss'],
})
export class EventDetailsComponent implements OnInit {
  @Output() newEvent = new EventEmitter<boolean>();

  ngOnInit(): void {}

  displayForm(value: boolean) {
    this.newEvent.emit(value);
  }
}
