import { Component, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { IValidator, IValidationResult } from '../../../node_modules/vgr-komponentkartan/lib/index';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ISelectableItem } from '../../../node_modules/vgr-komponentkartan/lib/index';
import { CityService } from './cityservice';

@Component({
  selector: 'app-inputfields',
  templateUrl: './inputfields.component.html',
  styleUrls: ['./inputfields.component.scss']
})
export class InputfieldsComponent implements OnInit {
  form: FormGroup;
  isSmall: boolean;
  cityName: string;
  amount1: number;
  amount2: number;
  numericValue: number;
  percentValue: number;
  kmValue: number;
  intValue: number;

  validationMessages = {
    control1: {
      'invalidNumber': 'Ange ett nummer!',
    },
    control2: {
      'invalidNumber': 'Minst 3 siffror tack!',
      'minlength': 'Minst 3 siffror tack!'
    },
    control3: {
      'invalidNumber': 'Ange ett nummer!',
    },
    control4: {
      'invalidNumber': 'Ange ett nummer!',
    },
    control5: {
      'invalidNumber': 'Ange ett nummer!',
    },
    control7: {
      'pattern': 'Ange exakt tre VERSALER.',
    },
    control8: {
      'pattern': ' Ange mellan 2-6 tecken.'
    },
    control9: {
      'invalidNumber': 'Ange ett giltigt heltal.'
    },
    control10: {
      'required': 'Detta är ett längre meddelande som visas när något blir väldigt väldigt fel'
    },
    control13: {
      'invalidCity': 'Felaktig stad',
    },
    control14: {
      'email': 'Felaktig e-post'
    }

  };

  constructor(private fb: FormBuilder) {
    this.cityName = 'Houstons';
    this.amount1 = 15000;
    this.amount2 = -25.5;
    this.percentValue = 0.02;
    this.kmValue = 11;
    this.intValue = 0;
    this.isSmall = false;
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    // this.form = this.fb.group({
    //   control1: [this.amount1, validateNumber],
    //   control2: [this.amount2, [validateNumber, Validators.required, Validators.minLength(3)]],
    //   control3: [this.percentValue, validateNumber],
    //   ntrol4: [this.kmValue, validateNumber], 
    //   control5: [this.numericValue, validateNumber],
    //   control6: [],
    //   control7: ['abc', [Validators.pattern('^[A-Z,Å,Ä,Ö]{3}$'), Validators.required]],
    //   control8: ['', [Validators.pattern('^.{2,6}$'), Validators.required]], 
    //   control9: [this.intValue, validateNumber],
    //   control10: ['', Validators.required],
    //   control11: ['Visar värdet utan ram'],
    //   control12: [],
    //   control13: [this.cityName, validateCityName],
    //   control14: ['', Validators.email]
    // });
  }
}
