import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
declare let Email: any;

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

  submitForm() {
    console.log(this.registerForm);
    const formValues = this.registerForm.value;

    Email.send({
      SecureToken: '5612e7ec-0912-46f7-81f4-c2b7814a998c',
      To: 'olgakassian@gmail.com',
      From: 'olgakassian@gmail.com',
      Subject: `New Submission from ${formValues.companyName}`,
      Body: `
      Company Name: ${formValues.companyName}, <br>
      NIF: ${formValues.companyNIF},
      Legal Address: ${formValues.legalAddress},
      Team Name: ${formValues.teamName}
      `,
    }).then((message: any) => alert(message));
  }
}
