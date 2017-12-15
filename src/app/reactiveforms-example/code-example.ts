export class Examples {
  htmltSimpFormMarkup = `
  <form [formGroup]="userForm">
  <div class="title-value-layout">
    <vgr-title-value title="Förnamn">
      <vgr-input formControlName="firstname" [errormessage]="validationMessages.firstname"></vgr-input>
    </vgr-title-value>
    <vgr-title-value title="Efternamn">
      <vgr-input formControlName="lastname" [errormessage]="validationMessages.lastname"></vgr-input>
    </vgr-title-value>
    <vgr-title-value title="Ålder">
      <vgr-input formControlName="age" [rightAlign]="true" [suffix]="'år'" [errormessage]="validationMessages.age"></vgr-input>
    </vgr-title-value>
    <vgr-title-value title="E-post">
      <vgr-input formControlName="email" [errormessage]="validationMessages.email"></vgr-input>
    </vgr-title-value>
    <vgr-title-value title="Inkomst">
      <vgr-input formControlName="salary" [errormessage]="validationMessages.salary" [formatNumber]="true"
        [nrOfDecimals]="0"></vgr-input>
    </vgr-title-value>
    <vgr-title-value title="Favoritdjur">
      <vgr-dropdown formControlName="favourite_pet" [values]="['Katt','Hund','Guldfisk']"></vgr-dropdown>
    </vgr-title-value>
    <vgr-title-value title="Intressen">
      <vgr-dropdown-multiselect formControlName="interests" [values]="['Koda','Sport','Sova','Äta']"></vgr-dropdown-multiselect>
    </vgr-title-value>
    <vgr-title-value title="Du måste kryssa i mig!">
      <vgr-checkbox formControlName="check" [label]="'Ok! "></vgr-checkbox>
    </vgr-title-value>
    <vgr-title-value title="Välj valfri">
      <vgr-radio-group formControlName="optional" [options]="[{id: '1', displayName: 'Ett'},{id: '2', displayName: 'Två'},
        {id: '3', displayName: 'Tre'}] ">
      </vgr-radio-group>
    </vgr-title-value>
  </div>
  <vgr-button [disabled]="userForm.invalid">Skapa användare</vgr-button>
</form>`;

  typeScriptSimpleFormMarkup = `
  import { Component, OnInit } from '@angular/core';
  import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

  @Component({
      templateUrl: './reactiveforms-example.component.html'
  })
  export class ReactiveformsexampleComponent implements OnInit {
      userForm: FormGroup;
      validationMessages = {
          firstname: {
              'minlength': 'Namnet måste vara minst 2 tecken',
          },
          lastname: {
              'minlength': 'Namnet måste vara minst 2 tecken',
          },
          age: {
              'invalidNumber': 'Ange en siffra',
              'min': 'Ange en ålder på minst 18 år',
              'max': 'Ange en ålder under 120',
          },
          email: {
              'email': 'Ange en giltig e-post',
          },
          salary: {
              'invalidNumber': 'Ange ett giltigt belopp',
              'required': 'Detta skriver över default meddelandet för obligatoriska fält'
          }
      };

      constructor(private fb: FormBuilder) {}

      ngOnInit() {
          this.createForm();
      }

      createForm() {
          this.userForm = this.fb.group({
              firstname: ['', [Validators.required, Validators.minLength(2)]],
              lastname: ['', [Validators.required, Validators.minLength(2)]],
              age: ['', [Validators.required, Validators.min(18), Validators.max(120), validateNumber]],
              email: ['', [Validators.required, Validators.email]],
              salary: ['', [Validators.required, validateNumber]],
              favourite_pet: ['', Validators.required],
              interests: [['Koda'], Validators.required],
              check: [true, Validators.pattern('true')],
              optional: ['Två']
          });
      }
  }

  function validateNumber(control: AbstractControl) {
      const pattern = '^[-,−]{0,1}(\\d{1,3}([,\\s.]\\d{3})*|\\d+)([.,]\\d+)?$';

      const regexp = new RegExp(pattern);
      if (regexp.test(control.value)) {
          return null;
      }
      return { invalidNumber: true };
  }`;
}

