import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-lockbutton',
    templateUrl: './lockbutton.component.html',
    styleUrls: ['./lockbutton.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class LockbuttonComponent {
  lockMessage: string;
  constructor() { }

}
