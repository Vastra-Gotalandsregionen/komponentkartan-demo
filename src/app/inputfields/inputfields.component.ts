
import {map} from 'rxjs/operators';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Validators, AbstractControl, AsyncValidatorFn, FormBuilder, FormGroup } from '@angular/forms';
import { CityService } from './cityservice';

import { Subject } from 'rxjs';
import { InputComponent } from 'vgr-komponentkartan';

@Component({
    selector: 'app-inputfields',
    templateUrl: './inputfields.component.html',
    styleUrls: ['./inputfields.component.scss'],
    standalone: false
})
export class InputfieldsComponent implements OnInit, OnDestroy {
  @ViewChild('myInput', { read: InputComponent }) myInput: InputComponent;
  form: FormGroup;
  disabled = false;
  readonly = false;
  showErrors = true;

  private ngUnsubscribe: any = new Subject();


  ngModelValues = ['', 125, '', 22];

  validationMessages = {
    rf1: {
      pattern: 'Ange exakt tre VERSALER.',
    },
    rf2: {
      email: 'Felaktig e-post'
    },
    rf3: {
      invalidCity: 'Felaktig stad',
    },
    rf4: {
      min: 'Numret är för lågt',
      max: 'Numret är för högt'
    }
  };

  constructor(private fb: FormBuilder) {  }

  ngOnInit() {
    this.createForm();
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  createForm() {
    this.form = this.fb.group({
      rf1: ['', [Validators.pattern('^[A-Z,Å,Ä,Ö]{3}$'), Validators.required]],
      rf2: ['', Validators.email],
      rf3: ['', Validators.required, validateAsyncCityName()],
      rf4: [,[Validators.min(40), Validators.max(50)]]
    });
  }
}




function validateAsyncCityName(): AsyncValidatorFn {
  const service = new CityService();

  return (control: AbstractControl) => {
    return service.getAsyncCities().pipe(map(cities => {
      return cities.filter(x => x.city === control.value).length > 0 ? null : { 'invalidCity': { value: control.value } };
    }));
  };
}


