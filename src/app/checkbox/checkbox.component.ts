import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HtmlEncodeService } from '../html-encode.service';


@Component({
    selector: 'app-checkbox',
    templateUrl: './checkbox.component.html',
    styleUrls: ['./checkbox.component.scss'],
    standalone: false
})
export class CheckboxComponent implements OnInit {
  form: FormGroup;
  checkboxForm: FormGroup;
  showValidFormText: boolean = false;
  formSubmittedCheckboxGroup: boolean;
  formSubmittedCheckbox: boolean;
  klarmarkerad = false;
  exampleCode = `<h2>Exempel med form</h2>
  <form [formGroup]="checkboxForm">
      <vgr-checkbox-group (selectedChanged)="changed($event)" formControlName="checkboxValues" [showValidation]="formSubmittedCheckboxGroup">
          <vgr-checkbox [label]="'Med ledtext'"></vgr-checkbox>
          <vgr-checkbox [disabled]="true" [label]="'Inaktiverad'"></vgr-checkbox>
          <vgr-checkbox [label]="'Vald'"></vgr-checkbox>
          <vgr-checkbox [label]="'Vald2'"></vgr-checkbox>
      </vgr-checkbox-group>
  </form>`;

  exampleCodeMarkup;
  checkedChangedLabel: any;
  checkedChangedChecked: any;
  checkedChangedActivated: boolean;

  constructor(private fb: FormBuilder, htmlEncoder: HtmlEncodeService) {
    this.exampleCodeMarkup =
      htmlEncoder.prepareHighlightedSection(this.exampleCode, 'HTML');
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      checkbox: [false, { validators: [Validators.pattern('true')] }]
    }, { updateOn: 'submit' });

    this.checkboxForm = this.fb.group({
      checkboxValues: [['Vald'], { validators: [Validators.required]}]
    }, { updateOn: 'submit' });
  }

  submitForm() {
    this.formSubmittedCheckbox = true;

  }

  submitCheckboxForm() {
    this.formSubmittedCheckboxGroup = true;
  }

  resetCheckboxForm() {
    this.formSubmittedCheckboxGroup = false;
  }

  changed(event: any){
    this.checkedChangedActivated = true;
    this.checkedChangedLabel = event.label;
    this.checkedChangedChecked = event.checked;

  }
}
