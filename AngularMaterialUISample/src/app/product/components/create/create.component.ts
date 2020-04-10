import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  formGroup: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      'firstName': [null, [Validators.required, Validators.maxLength(30)]],
      'lastName': [null, [Validators.required, Validators.maxLength(30)]],
      'creditScore': [null, [Validators.required, this.validateCreditScore]],
      'annualIncome': [null, [Validators.required, this.validateAnnualIncome]]
    });
  }

  validateCreditScore(control: FormControl) {
    let value = control.value;
    let number = Number(value);

    return !isNaN(number) && (number > 0 && number <= 800) ? null : { 'creditScoreInvalid': true };
  }

  validateAnnualIncome(control: FormControl) {
    let value = control.value;
    let number = Number(value);

    return !isNaN(number) ? null : { 'annualIncomeInvalid': true };
  }

  getFirstNameErrorMsg() {
    return this.formGroup.get('firstName').hasError('required') ? 'First Name is required' :
      this.formGroup.get('firstName').hasError('maxLength') ? 'First Name must be between 1 and 30 characters' : '';
  }

  getLastNameErrorMsg() {
    return this.formGroup.get('lastName').hasError('required') ? 'Last Name is required' :
      this.formGroup.get('lastName').hasError('maxLength') ? 'Last Name must be between 1 and 30 characters' : '';
  }

  getCreditScoreErrorMsg() {
    return this.formGroup.get('creditScore').hasError('required') ? 'Credit Score is required' :
      this.formGroup.get('creditScore').hasError('creditScoreInvalid') ? 'Credit Score must be numeric and between 1 and 800' : '';
  }

  getAnnualIncomeErrorMsg() {
    return this.formGroup.get('annualIncome').hasError('required') ? 'Annual Income is required' :
      this.formGroup.get('annualIncome').hasError('annualIncomeInvalid') ? 'Annual Income must be numeric' : '';
  }

  onSubmit(formPost) {

  }

}
