import { Component, OnInit, Input } from '@angular/core';
import { ISelectableItem } from 'vgr-komponentkartan/lib/index';
import { NotificationIcon } from 'vgr-komponentkartan/lib/index';
import { NotificationType } from 'vgr-komponentkartan/lib/index';
@Component({
  selector: 'app-radiobuttons',
  templateUrl: './radiobuttons.component.html',
  styleUrls: ['./radiobuttons.component.scss']
})
export class RadiobuttonsComponent implements OnInit {
  selectedRadioOption: ISelectableItem;
  notificationTypes = NotificationType;
  notificationIcons = NotificationIcon;
  constructor() { }

  ngOnInit() {
  }

  onSelectedRadioOptionChanged(option: ISelectableItem) {
    this.selectedRadioOption = option;
  }

}
