import { Component, OnInit, Input } from '@angular/core';
import { NotificationType, NotificationIcon, ISelectableItem } from 'vgr-komponentkartan/dist';
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
