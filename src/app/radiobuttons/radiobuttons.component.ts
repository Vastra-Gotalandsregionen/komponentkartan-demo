import { Component, OnInit, Input } from '@angular/core';
import { ISelectableItem } from '../../../node_modules/vgr-komponentkartan/component-package/models/selectableItem.model';
@Component({
  selector: 'app-radiobuttons',
  templateUrl: './radiobuttons.component.html',
  styleUrls: ['./radiobuttons.component.scss']
})
export class RadiobuttonsComponent implements OnInit {

  selectedRadioOption: ISelectableItem;
  @Input() exempelOption: string = "[{id:'1', displayName:'Ett'},{id:'2', displayName:'Två'},{id:'3', displayName:'Tre'}, {id:'4', displayName:'Fyra', disabled:true}]";
  constructor() { }

  ngOnInit() {
  }

  onSelectedRadioOptionChanged(option: ISelectableItem) {
    this.selectedRadioOption = option;
  }
  consoleLog(logText: string) {
    console.log(logText);
  }

}
