import { Component, OnInit, Input } from '@angular/core';
import { ISelectableItem } from '../../../node_modules/vgr-komponentkartan/component-package/models/selectableItem.model';
import { NotificationIcon } from '../../../node_modules/vgr-komponentkartan/component-package/models/notificationIcon.model';
import { NotificationType } from '../../../node_modules/vgr-komponentkartan/component-package/models/notificationType.model';
import { ColumnWidth } from 'vgr-komponentkartan';
@Component({
  selector: 'app-radiobuttons',
  templateUrl: './radiobuttons.component.html',
  styleUrls: ['./radiobuttons.component.scss']
})
export class RadiobuttonsComponent implements OnInit {
  columnWidth = ColumnWidth;
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
