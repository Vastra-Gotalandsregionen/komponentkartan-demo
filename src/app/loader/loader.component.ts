import { Component } from '@angular/core';
import { ColumnWidth } from 'vgr-komponentkartan';

@Component({
  moduleId: module.id,
  selector: 'vgr-laddningssnurra',
  templateUrl: 'loader.component.html'
})
export class LoaderComponent {
  columnWidth = ColumnWidth;
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