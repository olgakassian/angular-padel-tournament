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

  isEmailSent = false;
  isFormValid = true;

  constructor() {}

  submitForm() {
    const formValues = this.registerForm.value;

    if (this.registerForm.valid) {
      Email.send({
        SecureToken: '8ffd422a-d437-45ed-be76-906ae607a4af',
        To: 'carolina.cerejo@valtech.com',
        From: 'carolina.cerejo@valtech.com',
        Subject: `New Submission from ${formValues.companyName}`,
        Body: `
      Company Name: ${formValues.companyName}, <br>
      NIF: ${formValues.companyNIF},
      Legal Address: ${formValues.legalAddress},
      Team Name: ${formValues.teamName}
      `,
      }).then((message: any) => {
        if (message === 'OK') {
          this.isEmailSent = true;
        }
      });
      this.isFormValid = true;
    } else {
      this.isFormValid = false;
    }

    this.registerForm.updateValueAndValidity();

    console.log(this.registerForm);
  }
}
