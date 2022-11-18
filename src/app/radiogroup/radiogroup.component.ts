import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NotificationType, RadiobuttonGroupComponent } from 'vgr-komponentkartan';

@Component({
  selector: 'app-radiogroup',
  templateUrl: './radiogroup.component.html',
  styleUrls: ['./radiogroup.component.scss']
})
export class RadiogroupComponent implements OnInit {
  selectedOption: string;
  notificationTypes = NotificationType;

  radiogroupVal: string;
  radioGroupForm: FormGroup;

  groupDisabled: boolean = false;
  @ViewChild('RadioGroup2') radioGroup2: RadiobuttonGroupComponent;
  radiogroupFormValue = '';

  valdBil: string;

  constructor() { }

  ngOnInit() {
    this.radioGroupForm = new FormGroup({
      val: new FormControl('Det var inte bra')
    }, { updateOn: 'change' });

    this.selectedOption = 'Toyota';
  }

  // onSelectedRadioOptionChanged(option: string) {
  //   this.selectedOption = option;
  // }

  valjBil(param) {
    this.selectedOption = param.value;
    if (this.groupDisabled) {
      this.valdBil = 'Du har valt att cykla'
    } else {
      this.valdBil = this.selectedOption;
    }
  }

  someCode(param, isFormControl = false) {
    if (isFormControl) {
      if (param) {
        this.radiogroupFormValue = param.value;
      } else {
        this.radiogroupFormValue = '';
      }


    }
  }

  rensaVal() {
    this.radioGroupForm.controls.val.reset();
  }

  // setFocus() {
  //   if (this.myRadioGroup) {
  //     setTimeout(() => {
  //       this.myRadioGroup.focus();
  //     });
  //   }
  // }

}
