import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeroHeaderComponent } from './hero-header/hero-header.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { FormComponent } from './form/form.component';
import { TimerComponent } from './timer/timer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CharityComponent } from './charity/charity.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroHeaderComponent,
    EventDetailsComponent,
    FormComponent,
    TimerComponent,
    CharityComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, NgbModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
