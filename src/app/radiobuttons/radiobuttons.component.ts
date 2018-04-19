import { Component, OnInit, Input } from '@angular/core';
import { NotificationType, SelectableItem } from 'vgr-komponentkartan';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-radiobuttons',
  templateUrl: './radiobuttons.component.html',
  styleUrls: ['./radiobuttons.component.scss']
})
export class RadiobuttonsComponent implements OnInit {
  selectedOption: string;
  notificationTypes = NotificationType;

  options: Array<SelectableItem<any>> = [];
  options2: Array<SelectableItem<any>> = [];

  form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.options = [{ value: 'Val 1', displayName: 'Val 1' }, { value: 'Val 2', displayName: 'Val 2' }, { value: 'Val 3', displayName: 'Val 3' }];
    this.options2 = [{ value: 'Val 1', displayName: 'Val 1 med  väldigt lång label' }, { value: 'Val 2', displayName: 'Val 2' }, { value: 'Val 3', displayName: 'Val 3' }];

    this.form = new FormGroup({
      optional: new FormControl()
    });

  }

  onSelectedRadioOptionChanged(option: string) {
    this.selectedOption = option;
  }

  rensaVal() {
    this.form.get('optional').reset();
  }

}
