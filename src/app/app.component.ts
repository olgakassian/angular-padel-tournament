import { DOCUMENT } from '@angular/common';
import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { HeroHeaderComponent } from './hero-header/hero-header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'Padel Tournament by Valtech';
  buttonState: boolean = false;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  updateValue(value: boolean) {
    this.buttonState = value;
    this.buttonClicked();
  }

  buttonClicked() {
    this.buttonState = true;
    setTimeout(() => {
      this.document.querySelector('#registerForm')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }, 250);
  }
}
