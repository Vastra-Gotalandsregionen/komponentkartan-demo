import { Component, OnInit, Output } from '@angular/core';
import { RowNotification } from '../../../node_modules/vgr-komponentkartan/component-package/models/rowNotification.model';
import { NotificationType } from '../../../node_modules/vgr-komponentkartan/component-package/models/notificationType.model';
import { NotificationIcon } from '../../../node_modules/vgr-komponentkartan/component-package/models/notificationIcon.model';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  // Mest exempel på hur man får en permanent notis i panelen. Du som ser detta, ta bort denna kommentar och bortkommenterade koden under. Checkboxen behöver ingen notis.
  // @Output() oversiktnotis;
  // Du sätter propertyn i html-filen här: <vgr-expandable-container [expanded]="true" [notification]="oversiktnotis">
  constructor() {

    // Mest exempel på hur man får en permanent notis i panelen. Du som ser detta, ta bort denna kommentar och bortkommenterade koden under. Checkboxen behöver ingen notis.
    // this.oversiktnotis = { icon: NotificationIcon.ExclamationRed, type: NotificationType.Permanent, message: "Something something, darkside. Something something, complete." } as RowNotification;
  }

  ngOnInit() {
  }

}
