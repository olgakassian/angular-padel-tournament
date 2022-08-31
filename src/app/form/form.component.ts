import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  @Input() state: boolean = true;

  registerForm = new FormGroup({
    companyName: new FormControl(''),
    companyNIF: new FormControl(''),
    legalAddress: new FormControl(''),
    teamName: new FormControl(''),
    playerName1: new FormControl(''),
    playerEmail1: new FormControl(''),
    playerName2: new FormControl(''),
    playerEmail2: new FormControl(''),
    playerName3: new FormControl(''),
    playerEmail3: new FormControl(''),
    responsibleEmail: new FormControl(''),
  });

  constructor() {}
}
