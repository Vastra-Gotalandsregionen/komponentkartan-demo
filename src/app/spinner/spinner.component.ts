import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'vgr-laddningssnurra',
  templateUrl: 'spinner.component.html'
})
export class SpinnerComponent {
  title = 'app';
  actionInProgress = false;

  get buttonText(): string {
    if (!this.actionInProgress) {
      return 'Start';
    } else {
      return 'Stop';
    }
  }
}