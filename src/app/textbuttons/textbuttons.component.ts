import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-textbuttons',
    templateUrl: './textbuttons.component.html',
    styleUrls: ['./textbuttons.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class TextbuttonsComponent {
  lastButtonPressed: string;
  buttonDisabled = true;
  buttonSecondaryDisabled = true;
  buttonDiscreetDisabled = true;
  loadingState = true;
  constructor() {
    this.lastButtonPressed = '';
  }

  toggleLoadingState() {
    this.loadingState = !this.loadingState;
  }

  testarLogg() {
    console.log('KLICKAD PÅ!')
  }

}
