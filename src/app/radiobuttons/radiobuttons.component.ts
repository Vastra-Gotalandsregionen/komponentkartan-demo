import { Component, OnInit, Input } from '@angular/core';
import { NotificationType, NotificationIcon, SelectableItem } from 'vgr-komponentkartan';
@Component({
  selector: 'app-radiobuttons',
  templateUrl: './radiobuttons.component.html',
  styleUrls: ['./radiobuttons.component.scss']
})
export class RadiobuttonsComponent implements OnInit {
  selectedOption: string;
  notificationTypes = NotificationType;
  notificationIcons = NotificationIcon;
  constructor() { }

  ngOnInit() {
  }

  onSelectedRadioOptionChanged(option: string) {
    this.selectedOption = option;
  }

}
