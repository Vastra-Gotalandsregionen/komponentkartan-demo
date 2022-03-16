import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { CheckboxComponentElement } from 'vgr-komponentkartan';


@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  // @ViewChild('myCheckbox', { read: CheckboxComponentElement }) myCheckbox: CheckboxComponentElement;
  form: FormGroup;
  checkboxForm: FormGroup;
  showValidFormText: boolean = false;
  formSubmittedCheckboxGroup: boolean;
  formSubmittedCheckbox: boolean;
  // checkbox = new FormControl('', Validators.required);

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      checkbox: ['', [Validators.required]]
    }, { updateOn: 'submit' });

    this.checkboxForm = this.fb.group({
      checkboxValues: [['Vald'], { validators: [Validators.required]}]
    }, { updateOn: 'submit' });
  }

  submitForm() {
    this.form.controls.checkbox.markAsTouched();

    this.formSubmittedCheckbox = true;
    if (this.form.valid) {
      this.showValidFormText = true;

    } else {
      this.showValidFormText = false;
    }

  }

  submitCheckboxForm() {
    this.formSubmittedCheckboxGroup = true;
    // this.checkboxForm.controls.checkboxValues.markAsTouched();
    // Do nothing...
    // this.checkboxForm.reset();
  }

  resetCheckboxForm() {
    this.formSubmittedCheckboxGroup = false;
  }

  // setFocus() {
  //   this.myCheckbox.focus();
  // }

}
