import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-notification-documentation',
    templateUrl: './notification-documentation.component.html',
    styleUrls: ['./notification-documentation.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class NotificationDocumentationComponent {
  showAlert = false;
  isAlertNotice = true;

  onAlertNotice() {
    this.isAlertNotice = true;
    setTimeout(() => {
      this.showAlert = true;
    });
  }

  onClearClick() {
    this.isAlertNotice = false;
    setTimeout(() => {
      this.showAlert = false;
    });
  }
}
