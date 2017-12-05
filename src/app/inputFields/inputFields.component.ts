import { Component, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { IValidator, IValidationResult } from '../../../node_modules/vgr-komponentkartan/component-package/models/validation.model';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ISelectableItem } from '../../../node_modules/vgr-komponentkartan/component-package/models/selectableItem.model';
import { CityService } from './cityservice';

@Component({
  selector: 'app-inputfields',
  templateUrl: './inputfields.component.html',
  styleUrls: ['./inputfields.component.scss']
})
export class InputfieldsComponent implements OnInit {
  form: FormGroup;
  isSmall: boolean;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      control1: [1500],
      control2: [-25.5, Validators.required],
      control3: [0.02],
      control4: [12],
      control5: [],
      control6: [],
      control7: ['abc', Validators.pattern('^[A-Z,Å,Ä,Ö]{3}$')],
      control8: ['', [Validators.pattern('^.{2,6}$'), Validators.required]],
      control9: [0, Validators.pattern('^[0-9]+$')],
      control10: ['', Validators.required],
      control11: ['Visar värdet utan ram'],
      control12: [],
      control13: ['Houstons', validateCityName],
      control14: ['', Validators.email]
    });
  }

  formatNumericValue(value: number) {
    return isNaN(value) ? 'Inget' : value;
  }

  toggleInputType(option: ISelectableItem) {
    if (option.displayName === 'Stor') {
      this.isSmall = false;
    } else {
      this.isSmall = true;
    }
  }
}

function validateCityName(control: AbstractControl) {
  const service = new CityService();
  const allCities = service.getCities();
  if (allCities.filter(x => x.city === control.value).length > 0) {
    return null;
  }
  return { invalidCity: true };
}
