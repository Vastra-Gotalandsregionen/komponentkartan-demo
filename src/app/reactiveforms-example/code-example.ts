export class Examples {
    htmltSimpFormMarkup = `
  <form [formGroup]="userForm">
  <vgr-title-value-layout>
    <vgr-title-value title="Förnamn">
      <vgr-input formControlName="firstname" [errorMessage]="validationMessages.firstname"></vgr-input>
    </vgr-title-value>
    <vgr-title-value title="Efternamn">
      <vgr-input formControlName="lastname" [errorMessage]="validationMessages.lastname"></vgr-input>
    </vgr-title-value>
    <vgr-title-value title="Ålder">
      <vgr-input formControlName="age" [alignRight]="true" [suffix]="'år'" [errorMessage]="validationMessages.age"></vgr-input>
    </vgr-title-value>
    <vgr-title-value title="E-post">
      <vgr-input formControlName="email" [errorMessage]="validationMessages.email"></vgr-input>
    </vgr-title-value>
    <vgr-title-value title="Inkomst">
      <vgr-input formControlName="salary" [errorMessage]="validationMessages.salary" [formatNumber]="true" [nrOfDecimals]="0"></vgr-input>
    </vgr-title-value>
    <vgr-title-value title="Favoritdjur">
      <vgr-dropdown formControlName="favourite_pet" [items]="dropdownItems"></vgr-dropdown>
    </vgr-title-value>
    <vgr-title-value title="Intressen">
      <vgr-dropdown-multiselect formControlName="interests" [items]="dropdownItemsMulti"></vgr-dropdown-multiselect>
    </vgr-title-value>
    <vgr-title-value title="Du måste kryssa i mig!">
      <vgr-checkbox formControlName="check" [label]=" 'Ok!' "></vgr-checkbox>
    </vgr-title-value>
    <vgr-title-value title="Välj valfri">
      <vgr-radio-group formControlName="optional" [options]="radioOptions">
      </vgr-radio-group>
    </vgr-title-value>
    <vgr-title-value title="Välj Månad">
      <vgr-monthpicker formControlName="monthpicker"></vgr-monthpicker>
    </vgr-title-value>
    <vgr-title-value title="Välj Dag">
      <vgr-datepicker formControlName="datepicker"></vgr-datepicker>
    </vgr-title-value>
    <vgr-title-value title="Registreringsdatum">
      <vgr-datepicker formControlName="datepicker_preselected"></vgr-datepicker>
    </vgr-title-value>
  </vgr-title-value-layout>
  <vgr-button [disabled]="userForm.invalid">Skapa användare</vgr-button>
</form>`;

    typeScriptSimpleFormMarkup = `
    import { Component, OnInit } from '@angular/core';
    import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
    import { SelectableItem, DropdownItem } from 'vgr-komponentkartan';;

    @Component({
        selector: 'app-reactiveformscodeexample',
        templateUrl: './reactiveforms-example.component.html',
        styleUrls: ['./reactiveforms-example.component.scss']
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

        radioOptions: SelectableItem<number>[];
        dropdownItems: DropdownItem<string>[];
        dropdownItemsMulti: DropdownItem<string>[];

        constructor(private fb: FormBuilder) {
            this.radioOptions = [
                { displayName: 'Ett', value: 1 },
                { displayName: 'Två', value: 2 },
                { displayName: 'Tre', value: 3 }
            ];

            this.dropdownItems = [
                { displayName: 'Hund', value: 'Hund' },
                { displayName: 'Katt', value: 'Katt' },
                { displayName: 'Guldfisk', value: 'Guldfisk' }
            ];

            this.dropdownItemsMulti = [
                { displayName: 'Koda', value: 'Koda' },
                { displayName: 'Äta', value: 'Äta' },
                { displayName: 'Sova', value: 'Soa' }
            ];
        }
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
                favourite_pet: [null, Validators.required],
                interests: [[this.dropdownItemsMulti[0].value], Validators.required],
                check: [true, Validators.pattern('true')],
                optional: [this.radioOptions[2].value],
                monthpicker: ['', Validators.required],
                datepicker: ['', Validators.required],
                datepicker_preselected: [new Date(), Validators.required]
            });
        }
    }`;
}

